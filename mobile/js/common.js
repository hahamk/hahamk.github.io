var FG_layerPopup;
(function() {
	var LAYER_POPUP = function() {
		this._target = null;
		this._scrollTop = 0;
	};

	LAYER_POPUP.prototype = {
		show:function(element) {
			var that = this;
			if(arguments.callee.caller == null)
				that._target = null;
			else {
				that._target = window.event || arguments.callee.caller.arguments[0];
				if(that._target != undefined) {
					that._target = (that._target.srcElement) ? that._target.srcElement : that._target.target;
				}
			}

			that.layer = $(element);			

			var window_h = $(window).height();
			var zIndex = 1001;

			var h = parseInt(window_h - that.layer.height())/2;
			
			if($('.popup:visible').size() == 0) {
				that._scrollTop = $(window).scrollTop();
				$('body').addClass('fixed').css('top','-'+that._scrollTop+'px');
			} else {
				$('.popup:visible').each(function() {
					zIndex = Math.max(zIndex, $(this).css('zIndex'));
				});
				zIndex++;
			}
			
			that.layer.css({'height':'100%', 'paddingTop':h+'px', 'zIndex':zIndex}).show().attr('tabindex', 0).focus();			
			that.layer.find('.layer-close').bind('click', $.proxy(that.hide, that, element));
		},
		hide:function(element) {
			var that = this;

			if(element !== undefined && element[0] !== undefined) that.layer = $(element);

			if(that._target != null)	$(that._target).attr('tabindex', 0).focus();

			if($('.popup:visible').size() == 1) {
				that.layer.css({'height':'auto', 'paddingTop':0, 'zIndex':1001}).hide();
				$('body').removeClass('fixed').css('top',0).scrollTop(that._scrollTop);
			} else {
				that.layer.css({'height':'auto', 'paddingTop':0, 'zIndex':1001}).hide();
			}

			return false;
		}
	};

	window.LAYER_POPUP = LAYER_POPUP;

	return {
		load:function() {
			FG_layerPopup = new LAYER_POPUP();
		}
	}
})().load();