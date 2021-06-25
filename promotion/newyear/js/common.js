// extend Object. inspired by Prototype.
if (!Object.extend) {
	Object.extend = function(target, source) {
		for (var property in source)
			target[property] = source[property];
		return target;
	};
}

var FG_layerPopup_etc;
(function() {
	var LAYER_POPUP_etc = function() {
		this.modalStyle = {
			position:'absolute',
			top:0,
			left:0,
			right:0,
			zIndex:99,
			height:this._size.oHeight
		};
		this.layerStyle = {
			display:'block',
			position:'fixed',
			left:'50%',
			top:'50%',
			zIndex:100
		};
		this.option = {
			modalHide:false,
			modalClose:false
		};

		this._target = null;
	};

	LAYER_POPUP_etc.prototype = {
		_size:{
			cWidth:document.documentElement.clientWidth,
			cHeight:document.documentElement.clientHeight,
			oHeight:function() {
				return Math.max(
					Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
					Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
					Math.max(document.body.clientHeight, document.documentElement.clientHeight)
				);
			}
		},
		show:function(element) {
			var that = this;
			if(arguments.callee.caller == null)
				that._target = null;
			else {
				that._target = window.event || arguments.callee.caller.arguments[0];
				if(that._target != undefined)
					that._target = (that._target.srcElement) ? that._target.srcElement : that._target.target;
			}

			that.layer = $(element);

			Object.extend(that.layerStyle, {
				transform:'translateX(-50%) translateY(-50%)'
			});

			that.layer.css(that.layerStyle);

			if(!that.option.modalHide) {
				that.lightBox = $('<div />').appendTo('body').css(that.modalStyle).addClass('modalLayer');

				if(that.option.modalClose === true)
					that.lightBox.click($.proxy(that.hide, that));
			}
			that.layer.find('.layer-close').bind('click', $.proxy(that.hide, that));
		},
		hide:function(element) {
			var that = this;

			if(element !== undefined && element[0] !== undefined) that.layer = $(element);

			if(!that.option.modalHide) {
				if(that.lightBox) that.lightBox.remove();
			}
			that.layer.hide();

			return false;
		},
		hidepade:function(element) {
			var that = this;

			if(element !== undefined && element[0] !== undefined) that.layer = $(element);

			if(!that.option.modalHide) {
				if(that.lightBox) that.lightBox.remove();
			}
			that.layer.fadeOut();

			return false;
		}
	};

	window.LAYER_POPUP_etc = LAYER_POPUP_etc;

	return {
		load:function() {
			FG_layerPopup_etc = new LAYER_POPUP_etc();
		}
	};
})().load();


var searchArtist = function(options) {
	var button = options.button;
	var input = options.input;
	var deleteInput = options.deleteInput;
	var autocomplete = options.autocomplete;
	var instance, stateButton;


	var eventSearch;
	if(document.createEvent) {
		eventSearch = document.createEvent('Event');
		eventSearch.initEvent('search', true, true);
	}
	else if(document.createEventObject) {
		eventSearch = document.createEventObject();
	}

	var eventRegist;
	if(document.createEvent) {
		eventRegist = document.createEvent('Event');
		eventRegist.initEvent('regist', true, true);
	}
	else if(document.createEventObject) {
		eventRegist = document.createEventObject();
	}

	function initiate() {

		input.addEventListener('keyup', _handleKeyup, false);
		button.addEventListener('search', _searchArtist, false);
		button.addEventListener('regist', _handleRegist, false);
		['click', 'touch'].forEach(function(event) {
			button.addEventListener(event, function () {
				if (stateButton === 'search'){
					button.dispatchEvent(eventSearch);
				}else if (stateButton === 'regist') {
					button.dispatchEvent(eventRegist);
				}
			}, false);
		});
		['click', 'touch'].forEach(function(event) {
			deleteInput.addEventListener(event, _deleteName, false);
		});
	}

	function _handleKeyup(){
		var input_val = this.value;
		button.innerHTML = '조회';

		if (input_val.length > 0 ) {
			button.disabled = false;
			deleteInput.style.display = 'block';
			stateButton = 'search';
		}else {
			button.disabled = true;
			deleteInput.style.display = 'none';
			stateButton = null;
		}
	}

	function _searchArtist() {
		// autocomplete.innerHTML = ''; 검색결과 초기화
		// 조회 후 render > autocomplete 레이어 display:block 으로 변경
		autocomplete.style.display = 'block';
		button.disabled = true;
		button.innerHTML = '등록';
		stateButton = 'regist';

		var lists = document.querySelectorAll('.auto_complete li a');

		['click', 'touch'].forEach(function(event) {
			for (var i = 0; i < lists.length; i++) {
				lists[i].addEventListener(event, function(e) {
					e.preventDefault ? e.preventDefault() : (e.returnValue = false);
					input.value = $(this).find('.artist strong').text();
					button.disabled = false;
					autocomplete.style.display = 'none';
				});
			}
		});
	}

	function _handleRegist() {
		alert('아티스트 등록 레이어 노출');

		_deleteName();
	}

	function _deleteName() {
		input.value = '';
		input.focus();
		button.disabled = true;
		button.innerHTML = '조회';
		deleteInput.style.display = 'none';
		if (autocomplete.style.display == 'block') autocomplete.style.display = 'none';
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = initiate();
			}
			return instance;

		}
	};
};

function resizeFix() {
	$('[data-wording]').each(function() {
		if (window.matchMedia('(max-width:1070px)').matches) {
			$(this).html(wording.small[$(this).data('wording')]);
		} else {
			$(this).html(wording.large[$(this).data('wording')]);
		}
	});
}

function fixedTab() {
	var windowPos = $(window).scrollTop(),
		tabOffsetTop = $('.choice').offset().top;

	if(windowPos > tabOffsetTop){
		$('body').addClass('fixedTab');
	}else{
		$('body').removeClass('fixedTab');
	}
}

$(window).on('resize', resizeFix);
$(window).on('resize scroll', fixedTab);

$(function(){
	resizeFix();

	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type + div').show();
	$('.tabs a').click(function(e){
		var windowPos = $(window).scrollTop(),
			tabOffsetTop = $('.choice').offset().top;

		if(windowPos > tabOffsetTop) $(window).scrollTop(tabOffsetTop);

		e.preventDefault();
		var $this = $(this),
			tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
			others = $this.closest('li').siblings(),
			target = $this.attr('href');
		others.removeClass('active');
		$this.parents('li').addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();
	});

	var motions = document.querySelectorAll('.motion .ear, .motion .wink');
	setTimeout(function(){
		for (var i = 0; i < motions.length; ++i) {
			motions[i].className += ' animated';
		}
	}, 2000);

	var searchInput = searchArtist({
		button : document.querySelector('#regist'),
		input: document.querySelector('#search'),
		deleteInput: document.querySelector('#deleteInput'),
		autocomplete: document.querySelector('.auto_complete')
	});
	searchInput.getInstance();

	$('.scrollbar-inner').scrollbar();
});


function openLayer(IdName){
	var pop = document.getElementById(IdName);
	pop.style.display = "block";
}
function closeLayer(IdName){
	var pop = document.getElementById(IdName);
	pop.style.display = "none";
}
