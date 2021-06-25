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

function MovePlayer4($wrap) {
	this.$wrap = $wrap;
}
MovePlayer4.prototype.start = function() {
	var $page = helpers.createDiv({ 'class': 'page', container: this.$wrap }),
		$page2 = helpers.createDiv({ 'class': 'page2', container: this.$wrap }),
		$page3 = helpers.createDiv({ 'class': 'page3', container: this.$wrap }),
		$hand = helpers.createDiv({ 'class': 'hand', container: this.$wrap }),
		elements = this.$wrap.children();

	var seq = [
		{ e: $hand, p: { opacity: 1 }, o: { duration: 500, delay: 500 } },
		{ e: $hand, p: { scale : 0.9 }, o: { duration: 300 } },
		{ e: $hand, p: { scale : 1, delay: 200 }, o: { duration: 100, complete: function () {
			$page.hide();
			$page2.show();
		} } },
		{ e: $hand, p: { top: '7rem', marginLeft: '2.05rem' }, o: { duration: 300, easing: 'easeInOut', delay: 500 } },
		{ e: $hand, p: { scale : 0.9 }, o: { duration: 300, complete: function () {
			document.querySelector('.area5_bg').classList.add('black');
			$hand.hide();
			$page2.fadeOut(100);
			setTimeout(function () {
				$page3.fadeIn();
			}, 300);
		} } },
	];

	elements.velocity('stop');
	$.Velocity.RunSequence(seq);
}

MovePlayer4.prototype.stop = function () {
	animationStopController(this);
	document.querySelector('.area5_bg').classList.remove('black');
}

function animationStopController(_this) {
	function reset() {
		_this.$wrap.children().fadeOut('3000', function () {
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
	var movePlayer4 = new MovePlayer4($('#animation05'));

	var playList = new Array(
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		movePlayer4,
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
		var jbOffset = $( '.area8_bg' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( '.update' ).addClass( 'f-nav' );
      }
      else {
        $( '.update' ).removeClass( 'f-nav' );
    }
  });
});
