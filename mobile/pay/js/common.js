$(function() {
	var FG_openbox = document.getElementsByClassName("view");
	var i;
	for (i = 0; i < FG_openbox.length; i++) {
		FG_openbox[i].addEventListener("click", function() {
			this.classList.toggle("open");
		});
	}

	//ios용 헤더
	if ($('.product_tit').hasClass('blind') == false) {
		var jbOffset = $( '.product_tit' ).offset();
		$( window ).scroll( function() {
			if ( $( document ).scrollTop() > jbOffset.top ) {
				$( '.product_tit' ).addClass('fixed');
			}
			else {
				$( '.product_tit' ).removeClass('fixed');
			}
		});
	}

	//selectBox
	function GiftSelectBox(selector){
		this.$selectBox = null,
		this.$select = null,
		this.$list = null,
		this.$listLi = null;
		GiftSelectBox.prototype.init = function(selector){
			this.$selectBox = $(selector);
			this.$select = this.$selectBox.find('.box-area .select');
			this.$list = this.$selectBox.find('.box-area .list');
			this.$listLi = this.$list.children('li');
		}
		GiftSelectBox.prototype.initEvent = function(e){
			var that = this;
			this.$select.on('click', function(e){
				that.listOn();
			});
			this.$listLi.on('click', function(e){
				that.listSelect($(this));
			});
			$(document).on('click', function(e){
				that.listOff($(e.target));
			});
		}
		GiftSelectBox.prototype.listOn = function(){
			this.$selectBox.toggleClass('on');
			if(this.$selectBox.hasClass('on')){
				this.$list.css('display', 'block');
			}else{
				this.$list.css('display', 'none');
			};
			if(this.$selectBox.hasClass('on-blue')){
				selectType01.$selectBox.removeClass('on-blue');
				selectType02.$selectBox.removeClass('on-blue');
			}
		}
		GiftSelectBox.prototype.listSelect = function($target){
			$target.addClass('selected').siblings('li').removeClass('selected');
			selectType02.$selectBox.removeClass('is-disabled');
			this.$selectBox.removeClass('on');
			this.$selectBox.addClass('on-blue');
			this.$select.html($target.html());
			this.$list.css('display', 'none');
		}
		GiftSelectBox.prototype.listOff = function($target){
			if(!$target.is(this.$select) && this.$selectBox.hasClass('on')){
				this.$selectBox.removeClass('on');
				this.$list.css('display', 'none');
			};
		}
		this.init(selector);
		this.initEvent();
	}

	var selectType01 = new GiftSelectBox('.select-box.type01');
	var selectType02 = new GiftSelectBox('.select-box.type02');
});