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

$(function(){
	var motions = document.querySelectorAll('.motion .b01, .motion .b02');
	setTimeout(function(){
		for (var i = 0; i < motions.length; ++i) {
			motions[i].className += ' animated';
		}
	}, 1000);

	var motions2 = document.querySelectorAll('.s_motion .s01, .s_motion .s02');
	setTimeout(function(){
		for (var i = 0; i < motions2.length; ++i) {
			motions2[i].className += ' animated';
		}
	}, 4000);

	var jbOffset = $( '.common_box' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > jbOffset.top ) {
			$( '.menu' ).addClass('fixed');
		}
		else {
			$( '.menu' ).removeClass('fixed');
		}
	});

	$('.more_view .morebtn').click(function() {
		var obj = $(this).closest('.more_view');

		if(obj.hasClass('on')) {
			obj.removeClass('on');
		} else {
			$('.more_view:not(.on)').not(obj).removeClass('on');
			obj.addClass('on');
		}
		return false;
	});
});


//slider
$(function(){
	var tmi_s = $('.bx01').bxSlider({
		pager: true,
		infiniteLoop: false,
		hideControlOnEnd: true,
		responsive:true,
		touchEnabled:true,
		adaptiveHeight: true,
	});

	var tmi_a = $('.bx02').bxSlider({
		pager: true,
		infiniteLoop: false,
		hideControlOnEnd: true,
		responsive:true,
		touchEnabled:true,
		adaptiveHeight: true,
	});

	var tmi_i = $('.bx03').bxSlider({
		pager: true,
		infiniteLoop: false,
		hideControlOnEnd: true,
		responsive:true,
		touchEnabled:true,
		adaptiveHeight: true,
	});

	var tmi_v = $('.bx04').bxSlider({
		pager: true,
		infiniteLoop: false,
		hideControlOnEnd: true,
		responsive:true,
		touchEnabled:true,
		adaptiveHeight: true,
	});

	
	$('.morebtn').click(function(){
		tmi_s.redrawSlider();
		tmi_a.redrawSlider();
		tmi_v.redrawSlider();
	});
});

//d-day
function counter(){
	var dday = new Date("dec 31,2020,14:59:59").getTime(); //디데이
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
		var distance = dday - now;
		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s < 10){s = '0'+s;}
		if(m < 10){m = '0'+m;}
		if(d < 10){d = '0'+d;}
		if(h < 10){h = '0'+h;}
		$('.d-day').html(d+"<em>"+'일'+"</em>"+h+' : '+m+' : '+s)
	});
}
counter();

