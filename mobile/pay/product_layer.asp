	<!-- #include virtual="/mobile/inc/header.asp" -->
	<title>지니 &dash; 현재 페이지 제목</title>
	<script src="/mobile/js/swiper.jquery.min.js"></script>
    <link rel="stylesheet" href="/mobile/css/product.css" />
    <style>
        .popview {opacity:1;bottom:0;z-index:999;position: relative;margin:0 auto 1.5em; background:none}
        h1{background:#e3e3e3; line-height:3rem; font-size:1rem; padding-left:1rem; font-weight:700;}
    </style>
</head>
<body>
<h1>이용권구매 레이어</h1>

<!-- popup -->
<div class="popview" id="prod_pop">
	<header class="title">
		3개월 할인
		<p class="sub_tit">MP3 30곡 다운로드 + 음악감상</p>
		<a href="#" class="close">닫기</a>
	</header>
	<div class="pop_content">
		<ul class="pop_list">
			<li>첫 한 달 동안은 100원으로 결제되며, 이후 정상가로 결제됩니다. (가입자 당 1회만 가입 가능)</li>
			<li>2회차 이상 정기결제 유지 조건 상품입니다.</li>
			<li>곡 수 제한 없이 감상할 수 있습니다.</li>
		</ul>
	</div>
	<footer class="btm_btn">
		<a href="#none">구매하기</a>
	</footer>
</div>


<div class="popview" id="prod_pop">
	<header class="title">
		KT 전용
		<p class="sub_tit">미디어팩 멤버십</p>
		<a href="#" class="close">닫기</a>
	</header>
	<footer class="btm_btn">
		<a href="#none">자세히 보기</a>
	</footer>
</div>


<div class="popview" id="prod_pop">
	<header class="title">
		프로모션명
		<p class="sub_tit">선택상품명</p>
		<a href="#" class="close">닫기</a>
	</header>
	<div class="pop_content">
		<p class="stop">잠시만요!<br />
		동일한 음악 이용권을 이미 사용 중이에요.</p>
		<p>선택한 상품을 구매하시려면 현재 이용 중인 이용권을 먼저 해지해 주세요.</p>
	</div>
	<footer class="btm_btn">
		<a href="#none">이용권 확인</a>
	</footer>
</div>


<div class="popview" id="prod_pop">
	<header class="title">
		프로모션명
		<p class="sub_tit">선택상품명</p>
		<a href="#" class="close">닫기</a>
	</header>
	<div class="pop_content">
		<p class="stop">잠시만요!<br />
		음악 이용권을 이미 사용 중이에요.</p>
		<p>그래도 구매하시겠어요?</p>
	</div>
	<footer class="btm_btn col-2">
		<a href="#none">선물하기</a>
		<a href="#none">구매하기</a>
	</footer>
</div>

<!-- #include virtual="/mobile/inc/footer.asp" --> 