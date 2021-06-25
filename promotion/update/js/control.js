(function() {
	var Helpers;

	Helpers = (function() {
		function Helpers() {}

		Helpers.prototype.createDiv = function(o) {
			var $cont, $el;
			if (o == null) {
				o = {};
			}
			$el = $('<div />');
			(o['id'] != null) && $el.attr('id', o['id']);
			(o['class'] != null) && $el.addClass(o['class']);
			$cont = (o != null ? o.container : void 0) || $(document.body);
			$cont.append($el);
			return $el;
		};
		return Helpers;
	})();
	window.helpers = new Helpers;

	window.counter = function() {
		// this refers to the html element with the data-scroll-showCallback tag
		var span = this.querySelector('span');
		var current = parseInt(span.textContent);
		span.textContent = current + 1;
	};

}).call(this);

function MovePlayer1($wrap) {
	this.$wrap = $wrap;
}
MovePlayer1.prototype.start = function() {
	var $covers = helpers.createDiv({ 'class': 'covers', container: this.$wrap }),
		$coversContent = helpers.createDiv({ 'class': 'covers_content', container: $covers }),
		$topnav = helpers.createDiv({ 'class': 'topnav', container: this.$wrap }),
		$page = helpers.createDiv({ 'class': 'page', container: this.$wrap }),
		$page2 = helpers.createDiv({ 'class': 'page2', container: this.$wrap }),
		$hand = helpers.createDiv({ 'class': 'hand', container: this.$wrap }),
		elements = this.$wrap.children();

	var seq = [
		{ e: $hand, p: { opacity: 1 }, o: { duration: 500, delay: 1000 } },
		{ e: $hand, p: { scale : 0.9 }, o: { duration: 300, delay: 500 } },
		{ e: $hand, p: { scale : 1, opacity: 0 }, o: { duration: 100, complete: function () {
			setTimeout(function () {
				$page.fadeOut();
				$($page2, $topnav).fadeIn();
			}, 1000);
		} } },
		{ e: $hand, p: { top: '-=2.2rem', marginLeft: '+=5.9rem' }, o: { duration: 1000, easing: 'easeInOut', delay: 500 } },
		{ e: $hand, p: { opacity: 1 }, o: { duration: 500, delay: 1000 } },
		{ e: $hand, p: { scale : 0.99 }, o: { duration: 0 } },
		{ e: $topnav, p: { marginTop : '-=1.5625rem' }, o: {duration: 300, delay: 500}},
		{ e: $covers, p: { marginTop : '-=1.5625rem' }, o: {duration: 300, sequenceQueue: false} },
		{ e: $coversContent, p: { marginTop : '-=47.0625rem' }, o: { duration: 2500, sequenceQueue: false } },
		{ e: $hand, p: { top: '-=10.2rem', opacity: 1 }, o: { duration: 1500, easing: 'easeOutSine', sequenceQueue: false, complete: function () {
			$hand.velocity('transition.fadeOut');
		} } },
	];

	elements.velocity('stop');
	$.Velocity.RunSequence(seq);
}
MovePlayer1.prototype.stop = function () {
	this.$wrap.children().remove();
}

function MovePlayer3($wrap) {
	this.$wrap = $wrap;
}
MovePlayer3.prototype.start = function() {
	this.stop();
	var $text1 = helpers.createDiv({ 'class': 'before', container: this.$wrap }),
		$text2 = helpers.createDiv({ 'class': 'after', container: this.$wrap }),
		$left = helpers.createDiv({ 'class': 'leftbtn', container: this.$wrap }),
		step1 = bodymovin.loadAnimation({
			wrapper: document.querySelector('.leftbtn'),
			animType: 'svg',
			loop: false,
			autoplay: false,
			path: 'js/ar_minus.json'
		}),
		$right = helpers.createDiv({ 'class': 'rightbtn', container: this.$wrap }),
		step2 = bodymovin.loadAnimation({
			wrapper: document.querySelector('.rightbtn'),
			animType: 'svg',
			loop: false,
			autoplay: false,
			path: 'js/ar_plus.json'
		}),
		elements = this.$wrap.children();

	var seq = [
		{ e: $right, p: { opacity: 1 }, o: { duration: 1000, delay: 0, complete: function () {
			setTimeout(function () {
				step2.addEventListener('complete', function () {
					$text1.hide();
					$text2.show();
				});
				step2.play();
			}, 1000);
		} } },
		{ e: $left, p: { opacity: 1 }, o: { duration: 500, delay: 2000, complete: function () {
			setTimeout(function () {
				step1.addEventListener('complete', function () {
					$text1.show();
					$($text2, $left, $right).hide();
					step1.destroy();
					step2.destroy();
				});
				step1.play();
			}, 1000);
		} } },
	];

	elements.velocity('stop');
	$.Velocity.RunSequence(seq);
}
MovePlayer3.prototype.stop = function () {
	this.$wrap.children().remove();
}

function animationStopController(_this) {
	function reset() {
		_this.$wrap.children().fadeOut('2000', function () {
			$(this).remove();
		});
	}
	$.when(reset()).done(function() {
		if (_this.$wrap.hasClass('appear')){
			_this.start();
		}
	});
}

function init(){
	var trigger = new ScrollTrigger({
		addHeight: true
	});
}


$(function(){
	init();
	/* animations */
	var movePlayer1 = new MovePlayer1($('#animation02'));
	var movePlayer3 = new MovePlayer3($('#animation04'));

	var playList = new Array(
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		movePlayer3
	);

	function product_detail_apear(item){
		$('#area'+ item + ' .frame').addClass('appear');
		if(playList[item] !== null) playList[item].start();
	}
	function product_detail_disappear(item) {
		$('#area'+ item + ' .frame').removeClass('appear');
		if(playList[item] !== null) playList[item].stop();
	}

	var detailGroup = [];
	for (var i = 1; i <= 10; i++){
		detailGroup.push(i);
	}

	$.each(detailGroup, function(index, item){
		$('#area'+ item + ' .frame' ).on('scrollSpy:enter', function() {
			product_detail_apear(item);
		});
		$('#area'+ item + ' .frame' ).on('scrollSpy:exit', function() {
			product_detail_disappear(item);
		});
		$('#area'+item + ' .frame').scrollSpy();
	});
});

$(function(){
		var jbOffset = $( '.area5_bg' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( '.update' ).addClass( 'f-nav' );
      }
      else {
        $( '.update' ).removeClass( 'f-nav' );
    }
  });
});
