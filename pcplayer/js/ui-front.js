
var ua = navigator.userAgent;
if(ua.indexOf("Windows NT 6.1") > -1){
	$("html").addClass("windows7");
}

//브라우저 스크롤바 너비 리턴
var scrollBarWidth;
var getScrollBarWidth = function(){
	$("body").append($('<div id="divGetScrollbarWidth" style="position:absolute; left:-100px; top:-500px; width:300px; height:350px; overflow:auto"><div style="height:400px"></div></div>'));
	var w1 = $("#divGetScrollbarWidth").width();
	var w2 = $("#divGetScrollbarWidth > div").width();
	scrollBarWidth = w1 - w2;
	$("#container").append($('<div id="fakeScrollTrack" class="fake-scroll-track"><div>').width(scrollBarWidth));
};

var bodyscroll = {
	hidden : function(){
		var fstbottom = 0;
		$("#container").css("overflow","hidden").css("margin-right",scrollBarWidth);
		if($("body").find(".list-function").length === 1 && $("body").find(".list-function").css("position") === "fixed"){
		   fstbottom = $("body").find(".list-function").outerHeight();
		}
		$("#fakeScrollTrack").show().css("bottom",fstbottom);

	},
	shown : function(){
		$("#container").css("overflow","").css("margin-right","");
		$("#fakeScrollTrack").hide().css("bottom","");
	}
}

/*
 * gnb(좌측 메뉴 영역) 인터랙션
 */
var gnbAction = function(){
	var gnb = $("#gnb");
	var nav = gnb.find(".nav");
	var speed = 300;
	gnb.jScrollPane({autoReinitialise: true});

	nav.find("> li > a").click(function(e){
		var _this = $(this);
		if(_this.next("ul").length > 0){
			e.preventDefault();
			if(_this.parent("li").hasClass("open")){
				_this.next("ul").slideUp(speed,function(){
					_this.parent("li").removeClass("open");
				});
			}else{
				_this.next("ul").slideDown(speed,function(){
					_this.parent("li").addClass("open");
				});
			}
		}
	});
};

/*
 * focusJack
 * 팝업 열렸을 때 탭키 사용 시 팝업 내의 focusable한 엘리먼트에 포커스가 순환하도록 처리
 * 변수로 받은 팝업 내의 focusable 엘리먼트 갯수를 세서 마지막 focusable 엘리먼트일 경우 처음으로 돌리는 형태이므로 중간에 아이프레임을 넣게 되면 아이프레임 내부의 focusable 한 엘리먼트 숫자는 전체 숫자에 반영이 안되서 오류가 발생하므로 아이프레임 다음에 포커스 받을 수 있는 엘리먼트를 임의로 넣어줘야 함
 */
var focusableElems ="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var focusJack = function(elem){
	var bindTabKey = function(obj,evt) {
		if ( evt.which == 9 ) {
			var o = obj.find('*');
			var focusableItems;
			focusableItems = o.filter(focusableElems).filter(':visible');
			var focusedItem;
			focusedItem = $(':focus');
			var numberOfFocusableItems;
			numberOfFocusableItems = focusableItems.length;
			var focusedItemIndex;
			focusedItemIndex = focusableItems.index(focusedItem);
			if (evt.shiftKey) {
				if(focusedItemIndex==0){
					focusableItems.get(numberOfFocusableItems-1).focus();
					evt.preventDefault();
				}
			} else {
				if(focusedItemIndex==numberOfFocusableItems-1){
					focusableItems.get(0).focus();
					evt.preventDefault();
				}
			}
		}
	};
	elem.keydown(function(event){
		bindTabKey(elem,event);
	});
}


/*
 * toggleElem
 */
var toggleElem = function(wrapper,btn,target){
	btn.on("click",function(e){
		e.preventDefault();
		target.toggle();
		if(wrapper.hasClass("select-box")){
			btn.toggleClass("active");
		}
	});
	$(document).on("mousedown click",function(e) {
		if (wrapper.has(e.target).length === 0){
			target.hide();
			btn.removeClass("active");
		}
	});
	if(target.find(".close").length > 0){
		target.find(".close").click(function(){
			target.hide();
			//btn.focus();
		});
	}
};

/*
 * onScreenListLayer
 * 음악 목록 내 레이어 하단 잘림 여부 확인
 */
var onScreenListLayer = function(elem){
	var obj = elem;
	var viewport = {};
	viewport.height = $("#content").outerHeight();
	viewport.height2 = viewport.height + $("#header .header-content").outerHeight();
	var bounds = {};
	bounds.top = elem.offset().top;
	bounds.bottom = bounds.top + elem.outerHeight();
	return (viewport.height2 >= bounds.bottom);
}
var onScreenListLayer2 = function(elem){
	var obj = elem;
	var viewport = {};
	viewport.height = $("#container").outerHeight();
	viewport.height2 = viewport.height + $("#header .header-content").outerHeight();
	var bounds = {};
	bounds.top = elem.offset().top;
	bounds.bottom = bounds.top + elem.outerHeight();
	//console.log(viewport.height2 >= bounds.bottom)
	return (viewport.height2 >= bounds.bottom);
}

/*
 * positionPop
 * 음악 목록 내 팝업 위치 처리
 */
var posListPop = function(pop,btn,item){
	var options = {}
	options.mgl = $(".list-common-wrap").offset().left;
	options.mgt = $(".list-common-wrap").offset().top;
	options.sct = $("#content").scrollTop();
	options.pop = pop;
	options.btn = btn;
	options.btnww = btn.parent().outerWidth();
	options.by = options.btn.offset().top;
	options.bx = options.btn.offset().left;
	options.bheight = options.btn.outerHeight();
	options.bwidth = options.btn.outerWidth();
	options.pheight = options.pop.outerHeight();
	options.pwidth = options.pop.outerWidth();
	options.y = options.by + options.bheight;
	options.x = options.bx;

	if($(".section-search").length > 0 && $(".search-result").length > 0){
		options.mgl = $(".section-search").offset().left;
		options.mgt = $(".section-search").offset().top;
	}

	if(item === "artist"){
		if(options.bwidth > options.btnww) options.bwidth = options.btnww;
		options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.y + 10 - options.mgt});
		if(!onScreenListLayer(options.pop)){
			options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.by - options.pheight - 10 - options.mgt}).focus();
		}else{
			options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.y + 10 - options.mgt}).focus();
		}
	}else if(item === "myalbum"){
		options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.y + 10 - options.mgt});
		if(!onScreenListLayer(options.pop)){
			options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.by - options.pheight + 80 - options.mgt}).focus();
		}else{
			options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.y + 10 - options.mgt}).focus();
		}
	}else if(item === "musicvideo"){
		options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.y + 5 - options.mgt});
		if(!onScreenListLayer(options.pop)){
			options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.by - options.pheight - 5 - options.mgt}).focus();
		}else{
			options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.y + 5 - options.mgt}).focus();
		}
	}
};

/*
 * positionPop2
 * 음악 목록 내 팝업 위치 처리 수정된 함수
 */
var posListPop2 = function(pop,btn,item){
	var options = {}
	options.mgl = $("#container").offset().left;
	options.mgt = $("#container").offset().top;
	options.sct = $("#container").scrollTop();
	options.pop = pop;
	options.btn = btn;
	options.btnww = btn.parent().outerWidth();
	options.by = options.btn.offset().top;
	options.bx = options.btn.offset().left;
	options.bheight = options.btn.outerHeight();
	options.bwidth = options.btn.outerWidth();
	options.pheight = options.pop.outerHeight();
	options.pwidth = options.pop.outerWidth();
	options.swidth = $("#header .side").width();
	options.y = options.by + options.bheight;
	options.x = options.bx;
	options.cls;
	if(btn.attr("class")){
		options.cls = btn.attr("class");
	}else{
		options.cls = "";
	}
	options.funcpos = "";

	//console.log(options.cls.indexOf("btn-func"))
	if(options.cls.indexOf("btn-func") > -1){
		options.funcpos = options.btn.parent(".list-function").css("position");
	}

	if($(".section-search").length > 0 && $(".search-result").length > 0){
		/*options.mgl = $(".section-search").offset().left;
		options.mgt = $(".section-search").offset().top;*/
	}
	options.pop.css({position:""});
	/*if(options.cls.indexOf("btn-func") > -1 && options.funcpos == "fixed"){
		options.pop.css({"position":"",left:"",top:""});
	}else{
		options.pop.css({"position":"absolute",left:"",top:""});
	}*/


	if(item === "artist"){
		if(options.bwidth > options.btnww) options.bwidth = options.btnww;
		options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.y + 10 - options.mgt + options.sct});
		if(!onScreenListLayer2(options.pop)){
			options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.by - options.pheight - 10 - options.mgt + options.sct}).focus();
		}else{
			options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.y + 10 - options.mgt + options.sct}).focus();
		}
	}else if(item === "myalbum"){
		if(options.cls.indexOf("btn-func") > -1 && options.funcpos == "fixed"){
			options.pop.css("position","fixed");
			options.pop.css({left:options.x, top:options.by - options.pheight - 10}).focus();
		}else{
			options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.y + 10 - options.mgt + options.sct});
			if(!onScreenListLayer2(options.pop)){
				if(options.cls.indexOf("btn-func") > -1){
					options.pop.css({left:options.x - options.swidth, top:options.by - options.pheight + 10 - options.mgt + options.sct}).focus();
				}else{
					options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.by - options.pheight + 80 - options.mgt + options.sct}).focus();
				}
			}else{
				if(options.cls.indexOf("btn-func") > -1){
					options.pop.css({left:options.x - options.swidth, top:options.y + 10 - options.mgt + options.sct}).focus();
				}else{
				   options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.y + 10 - options.mgt + options.sct}).focus();
				}
			}
		}
	}else if(item === "musicvideo"){
		options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.y + 5 - options.mgt + options.sct});
		if(!onScreenListLayer2(options.pop)){
			options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.by - options.pheight - 5 - options.mgt + options.sct}).focus();
		}else{
			options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.y + 5 - options.mgt + options.sct}).focus();
		}
	}
};

/*
var posListPop2 = function(pop,btn,item){
	var options = {}
	options.mgl = $("#container").offset().left;
	options.mgt = $("#container").offset().top;
	options.sct = $("#container").scrollTop();
	options.pop = pop;
	options.btn = btn;
	options.btnww = btn.parent().outerWidth();
	options.by = options.btn.offset().top;
	options.bx = options.btn.offset().left;
	options.bheight = options.btn.outerHeight();
	options.bwidth = options.btn.outerWidth();
	options.pheight = options.pop.outerHeight();
	options.pwidth = options.pop.outerWidth();
	options.y = options.by + options.bheight;
	options.x = options.bx;

	if($(".section-search").length > 0 && $(".search-result").length > 0){
		options.mgl = $(".section-search").offset().left;
		options.mgt = $(".section-search").offset().top;
	}

	if(item === "artist"){
		if(options.bwidth > options.btnww) options.bwidth = options.btnww;
		options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.y + 10 - options.mgt + options.sct});
		if(!onScreenListLayer2(options.pop)){
			options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.by - options.pheight - 10 - options.mgt + options.sct}).focus();
		}else{
			options.pop.css({left:options.x + options.bwidth - 27 - options.mgl, top:options.y + 10 - options.mgt + options.sct}).focus();
		}
	}else if(item === "myalbum"){
		options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.y + 10 - options.mgt + options.sct});
		if(!onScreenListLayer2(options.pop)){
			options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.by - options.pheight - 10 - options.mgt + options.sct}).focus();
		}else{
			options.pop.css({left:options.x - options.pwidth + options.bwidth - options.mgl, top:options.y + 10 - options.mgt + options.sct}).focus();
		}
	}else if(item === "musicvideo"){
		options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.y + 5 - options.mgt + options.sct});
		if(!onScreenListLayer2(options.pop)){
			options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.by - options.pheight - 5 - options.mgt + options.sct}).focus();
		}else{
			options.pop.css({left:options.x - options.mgl - options.pwidth + options.bwidth, top:options.y + 5 - options.mgt + options.sct}).focus();
		}
	}
};
*/
var openCenterPop = function(pop,btn){
	var cont = pop.find(".pop-content");
	var close = pop.find(".close");
	var jScrollPaneOption = { verticalDragMinHeight: 60 };
	pop.show();
	var scr = pop.find(".scrollable");
	scr.jScrollPane(jScrollPaneOption);
	if(cont.hasClass("scrollable")){
		cont.jScrollPane(jScrollPaneOption);
	}
	bodyscroll.hidden();
	close.click(function(e){
		e.preventDefault();
		pop.hide();
		bodyscroll.shown();
	});
}

/* fake selectbox */
var selectBox = function(target,num){
	var select = target;
	var val = select.find("> a");
	var option = select.find(".drop");
	var options = option.find("ul");
	var numh = 6;
	//선택값 클릭
	val.click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		if(option.is(":visible")){
			option.css("display","none");
		}else{
			option.css("opacity",0).css("display","block");
			option.jScrollPane();
			option.css("opacity",1);
		}
	});
	//옵션 클릭
	options.on("click","li > a",function(e){
		e.preventDefault();
		var txt = $(this).html();
		val.html(txt).removeClass("active");
		options.find("li").removeClass("selected");
		$(this).parent("li").addClass("selected");
		option.css("display","none");
	});
	$(document).on("mousedown click",function(e) {
		if (select.has(e.target).length === 0){
			option.css("display","none");
			val.removeClass("active");
		}
	});
}

/*
 * 차트 상단 장르 등 좌우 롤링되는 탭(가변 대응 외) //미완
 */
var carouselTab = function(elem){
	var tabsw = 0;
	var contw = 0;
	var btnp = elem.find(".btn.prev");
	var btnn = elem.find(".btn.next");
	var obj = elem.find(".holder ul");
	var seq = 0;

	btnp.removeClass("disabled");
	btnn.removeClass("disabled");
	/*
	btnp.addClass("disabled");

	btnn.click(function(){
		if($(this).hasClass("disabled")){
			return;
		}
		btnp.removeClass("disabled");
		seq += 1;
		//console.log(seq);
		var idx = seq - 1;
		var left = 0;
		for(var i=0; i<seq; i++){
			left += elem.find("ul > li").eq(i).width();
		}
		obj.animate({left:left * -1},400,"easeOutExpo");
	});
	btnp.click(function(){
		if($(this).hasClass("disabled")) return;
		btnn.removeClass("disabled");
		seq -= 1;
		//console.log(seq);
		var idx = seq - 1;
		var left = 0;
		for(var i=0; i<seq; i++){
			left += elem.find("ul > li").eq(i).width();
		}
		if(seq === 0) btnp.addClass("disabled");
		obj.animate({left:left * -1},400,"easeOutExpo");
	});
	*/
	tabsw = 0;
	contw = elem.width();
	elem.find("ul > li").each(function(){
		tabsw += $(this).width();
	});
	if(tabsw <= contw){
		elem.addClass("no-carousel");
	}else{
		elem.removeClass("no-carousel");
	}

	$(window).resize(function(){
		tabsw = 0;
		contw = elem.width();
		elem.find("ul > li").each(function(){
			tabsw += $(this).width();
		});
		if(tabsw <= contw){
			elem.addClass("no-carousel");
		}else{
			elem.removeClass("no-carousel");
		}
	});
	//}).resize();
};

//container 높이 조절 함수
var setHeightCotainer = function(){
	if($("body").find(".list-function:visible").length === 1 && $("body").find(".list-function").css("position") === "fixed"){
	//if($("body").find(".list-function:visible").length === 1){
		if($("#container").length > 0){
			$("#container").css("height","calc(100% - 112px)");
		}else{
			$("#content").css("height","calc(100% - 112px)");
		}
	}else{
		if($("#container").length > 0){
			$("#container").css("height","calc(100% - 70px)");
		}else{
			$("#content").css("height","calc(100% - 70px)");
		}
	}
}


$(function(){
	getScrollBarWidth();
	/*
	if($("body").find(".list-function:visible").length === 1 && $("body").find(".list-function").css("position") === "fixed"){
	//if($("body").find(".list-function:visible").length === 1){
		if($("#container").length > 0){
			$("#container").css("height","calc(100% - 112px)");
		}else{
			$("#content").css("height","calc(100% - 112px)");
		}
	}
	*/
	setHeightCotainer();
});
