	<!-- #include virtual="/mobile/inc/header.asp" -->
	<title>지니 &dash; 현재 페이지 제목</title>
	<script src="/mobile/js/swiper.jquery.min.js"></script>
	<link rel="stylesheet" href="/mobile/css/product.css" />
</head>
<body>
<!-- ios용 타이틀 -->
<header class="product_tit">
	<h1>이용권 구매</h1>
</header>

<article class="product_wrap">

	<!-- list : 추천이용권 -->
	<section class="product_box">
		<div class="title">
			<h3>추천 이용권</h3>
			<a href="#" class="more">더보기</a>
		</div>

		<ul class="product_list recom"><!-- 추천이용권 클래스 recom 추가 -->
			<li onclick="fnShowPop('prod_pop')">
				<div class="detail">
					<strong>
						<div class="name">스마트 음악감상</div>
					</strong>
					<div class="info">
						첫 달 할인
						<span class="discount"><em>98%</em><del>7,400원</del></span>
						<span class="price">100원</span>
						<i class="mobile">모바일</i>
					</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<strong>
						<div class="name">스마트 음악감상</div>
					</strong>
					<div class="info">
						6개월 할인
						<span class="discount"><em>36%</em><del>7,400원</del></span>
						<span class="price">4,700원</span>
						<i class="mobile">모바일</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 기본타입 -->
	<section class="product_box">
		<div class="title">
			<h3>인기 이용권</h3>
			<a href="#" class="more">더보기</a>
		</div>

		<ul class="product_list recom">
			<li>
				<div class="detail">
					<strong>
						<div class="name">구글네스트미니<br />X 음악감상</div>
					</strong>
					<div class="info">
						12개월 약정
						<span class="price">8,400원</span>
						<i class="gift">사은품</i>
						<i class="all">ALL</i>
					</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<strong>
						<div class="name">스마트 음악감상</div>
					</strong>
					<div class="info">
						3개월 할인
						<span class="discount"><em>32%</em><del>7,400원</del></span>
						<span class="price">5,000원</span>
						<i class="m"">모바일</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 스페셜 -->
	<section class="product_box">
		<div class="title">
			<h3>스페셜 이용권</h3>
		</div>

		<ul class="product_list">
			<li class="full_s">
				<div class="detail">
					<strong>
						<div class="name">스페셜 이용권</div>
						<span class="sub_tit">음악 이용권과 상품을 동시에!</span>
					</strong>
					<div class="info special">
						코원 CK11 무선 이어폰 증정外
						<span class="price">46,900원 ~</span>
						<div class="gift"><img src="//image.genie.co.kr/imageg/mobile/payment/img_gift_cowon.png" alt=""></div>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 전체박스 -->
	<section class="product_box">
		<div class="title">
			<h3>알뜰 음악감상</h3>
		</div>

		<ul class="product_list">
			<li class="full_s">
				<div class="detail">
					<strong>
						<div class="name">알뜰 음악감상</div>
						<span class="sub_tit">내가 이용한 만큼만!</span>
					</strong>
					<div class="info">
						한 곡당
						<span class="price">10원 ~</span>
						<i class="all">ALL</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 제휴 -->
	<section class="product_box">
		<div class="title">
			<h3>제휴 이용권</h3>
		</div>

		<ul class="product_list">
			<li class="full_s">
				<div class="detail blue_br">
					<strong>
						<div class="name">제휴 이용권</div>
						<span class="sub_tit">초특가 할인 혜택받고 무제한 음악감상!</span>
					</strong>
					<div class="info color-red">IBK나라사랑카드, 씨티카드, 차이카드 등<br />다양한 제휴혜택이 가득</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 기본타입 -->
	<section class="product_box">
		<div class="title">
			<h3>KT 전용 이용권</h3>
			<a href="#" class="more">더보기</a>
		</div>

		<ul class="product_list">
			<li>
				<div class="detail">
					<strong>
						<div class="name">시즌 믹스 플러스</div>
						<span class="sub_tit">&#40; + 스마트 음악감상&#41;</span>
						<em>실시간tv + VOD + 코코</em>
					</strong>
					<div class="info">
						매월
						<span class="price">12,000원</span>
						<i class="mobile">모바일</i>
					</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<strong>
						<div class="name">미디어팩 멤버십</div>
					</strong>
					<div class="info">
						가입 월 + 1개월
						<span class="price">0원</span>
						<i class="m"">모바일</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 기본타입 -->
	<section class="product_box">
		<div class="title">
			<h3>U<sup>+</sup>전용 이용권</h3>
			<a href="#" class="more">더보기</a>
		</div>

		<ul class="product_list">
			<li>
				<div class="detail">
					<strong>
						<div class="name">지니뮤직<br />마음껏 듣기 멤버십</div>
					</strong>
					<div class="info">
						6개월 멤버십 차감
						<span class="discount"><em>30%</em><del>7,000원</del></span>
						<span class="price">4,900원</span>
						<i class="m"">모바일</i>
					</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<strong>
						<div class="name">지니뮤직<br />마음껏 듣기 멤버십</div>
					</strong>
					<div class="info">
						6개월 멤버십 차감
						<span class="discount"><em>30%</em><del>8,730원</del></span>
						<span class="price">6,111원</span>
						<i class="all"">ALL</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 기본타입 -->
	<section class="product_box">
		<div class="title">
			<h3>개월권<span>&</span>선물하기</h3>
			<a href="#" class="more">더보기</a>
		</div>

		<ul class="product_list">
			<li>
				<div class="detail">
					<strong>
						<div class="name">MP3 다운로드<br />10곡</div>
					</strong>
					<div class="info">
						30일
						<span class="price">5,500원</span>
						<i class="all">ALL</i>
					</div>
				</div>
			</li>
			<li>
				<div class="detail">
					<strong>
						<div class="name">음악나누기<br />100회</div>
					</strong>
					<div class="info">
						30일
						<span class="price">1,600원</span>
						<i class="all">ALL</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- list : 전체박스 -->
	<section class="product_box">
		<div class="title">
			<h3>음악나누기<span>&</span>선물하기</h3>
			<a href="#" class="more">더보기</a>
		</div>

		<ul class="product_list">
			<li class="full_s">
				<div class="detail">
					<strong>
						<div class="name">음악 감상과 공유를 동시에!</div>
						<span class="sub_tit">쉽고 간편하게 음악을 나누어보세요</span>
					</strong>
					<div class="info">
						<span class="price">800원 ~</span>
						<i class="all">ALL</i>
					</div>
				</div>
			</li>
		</ul>
	</section>

	<!-- 기능안내 -->
	<section class="product_box">
		<div class="title">
			<h5>이용권 기능안내</h5>
		</div>
		<div class="tb_info">
			<table>
				<caption>이용권 별 기능 안내</caption>
				<colgroup>
					<col width="*" />
					<col width="9%" />
					<col width="9%" />
					<col width="9%" />
					<col width="9%" />
					<col width="17%" />
				</colgroup>
				<thead>
				<tr>
					<th scope="col">이용권/기능</th>
					<th scope="col" colspan="2">음악감상</th>
					<th scope="col" colspan="2">다운로드</th>
					<th scope="col">나누기</th>
				</tr>
				<tr class="sub_title">
					<th></th>
					<th scope="col">PC</th>
					<th scope="col">APP</th>
					<th scope="col">MP3</th>
					<th scope="col">DRM</th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td scope="row">음악감상</td>
					<td>O</td>
					<td>O</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td scope="row">스마트 음악감상</td>
					<td></td>
					<td>O</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td scope="row">음악감상 + 다운로드</td>
					<td>O</td>
					<td>O</td>
					<td>O</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td scope="row">스마트 다운로드 + 음악감상</td>
					<td>O</td>
					<td>O</td>
					<td></td>
					<td>O</td>
					<td></td>
				</tr>
				<tr>
					<td scope="row">다운로드</td>
					<td></td>
					<td></td>
					<td>O</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td scope="row">음악나누기</td>
					<td>O</td>
					<td>O</td>
					<td></td>
					<td></td>
					<td>O</td>
				</tr>
				</tbody>
			</table>
		</div>
	</section>

	<!-- 유의사항 -->
	<section class="product_box">
		<div class="title">
			<h5>이용권 유의사항</h5>
		</div>
		<ul class="caution">
			<li>이용권 금액은 부가세 10%가 별도 청구됩니다.</li>
			<li>할인 이용권의 경우, 할인 기간 동안만 해당 가격으로 적용되며, 이 후 정상가로 결제 됩니다. 해당 이벤트는 사전 예고 없이 종료 될 수 있습니다.</li>
			<li>할인 이용권은 기타 포인트 결제수단과 중복 할인되지 않습니다.</li>
			<li>음원 권리사의 요청에 따라 일부 음원의 경우 음악감상, 다운로드 서비스 이용이 제한될 수 있습니다.</li>
			<li>지니 선불 이용권은 구매와 동시에 과금 및 적용 되며 사용이력에 따라 일부 환불이 불가할 수 있습니다.</li>
			<li>구매하신 이용권의 조회, 해지는 &#91;지니 앱 &#62; 내정보&#93;, &#91;지니 웹사이트 &#62; 마이뮤직 &#62; 이용권 내역&#93;에서 할 수 있습니다.</li>
			<li>자동결제를 해지하셔도 해당 이용권 만료일까지 사용이 가능 합니다.</li>
			<li>사용하지 않은 이용권은 결제 후 7일 이내 환불 받을 수 있습니다. &#40;통신사 부가서비스 제외&#41;</li>
			<li>일부 이용권&#40;통신사 멤버십 차감혜택 이용권 등&#41;은 7일 이후 환불이 제한될 수 있습니다.</li>
			<li>이용권 환불 신청은 지니 고객센터&#40;1577-5337&#41;로 전화하거나, &#91;지니 앱 &#62; 더 보기 &#62; 고객센터 &#62; 1:1 문의하기&#93;, &#91;지니 웹사이트 &#62; 하단 고객센터 &#62; 상단 문의하기&#93;에서 할 수 있습니다.</li>
			<li>사용 중인 이용권을 환불할 경우 사용 일수 및 사용 건수 등을 차감 후 환불됩니다.</li>
			<li>MP3 다운로드 이용권의 경우, 이용 기간 내 다운로드 하지 않으면 잔여곡은 소멸됩니다. &#40;이월 불가&#41;</li>
		</ul>
	</section>

	<section class="product_box">
		<div class="title">
			<h5>통신사 부가서비스 이용권 유의사항</h5>
		</div>
		<ul class="caution">
			<li>통신사 멤버십 사용혜택의 경우 해당 통신사의 정책을 따릅니다.</li>
			<li>통신사 이용권 정보가 확인이 안되실 경우 ’회원정보수정’에서 휴대폰인증을 진행하여 주시기 바랍니다.</li>
			<li>부가서비스의 환불 및 해지는 통신사 고객센터 및 홈페이지에서 신청할 수 있습니다.</li>
			<li>지니뮤직 정기결제 이용 시 통신사 부가서비스를 가입 하시는 경우, 요금이 중복으로 발생할 수 있습니다.</li>
			<li>KT멤버십 사용혜택 이용권의 경우, 결제시점에서 잔여 포인트가 부족한 경우 포인트 사용이 중단되어, 매월 전액결제로 자동변경 됩니다.</li>
			<li>지니팩, 미디어팩 멤버십(가입월+1개월)은 모바일 회선계약 당 1회만 가입이 가능하며, 해지 후 재가입이 불가합니다.</li>
			<li>U⁺멤버십 할인이 종료되는 7개월 차부터 정상가로 전환됩니다.</li>
			<li>U⁺멤버십 부가서비스는 최초 1회만 가입 가능합니다.<br />
			: 지니뮤직 마음껏 듣기&#40;모바일&#41; 멤버십<br />
			:  지니뮤직 마음껏 듣기&#40;모바일+PC&#41; 멤버십</li>
			<li>이미 사용한 U⁺멤버십 포인트는 환급이 불가합니다.</li>
			<li>U⁺멤버십 포인트 결제기간 중 휴대폰 일시 정지나 해지를 할 경우, 남은 이용기간 동안은 U⁺멤버십 포인트 혜택을 받을 수 없습니다.</li>
		</ul>
	</section>
</article>

<!-- popup -->
<div class="popview" id="prod_pop">
	<header class="title">
		3개월 할인
		<p class="sub_tit">MP3 30곡 다운로드 + 음악감상</p>
		<a href="#" class="close" onclick="fnHidePop('prod_pop')">닫기</a>
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

<script type="text/javascript">
	$(function() {
		$('.product_list li').click(function() {
			var obj = $(this).closest('.product_list li');
			var mpop = $('.popview');

			if(obj.hasClass('on')) {
				obj.removeClass('on');
				mpop.removeClass('on');

			} else {
				$('.product_list li:not(.fixed)').not(obj).removeClass('on');
				obj.addClass('on');


				var offset = $(obj).offset();
				$('html, body').delay(100).animate({scrollTop : offset.top-100}, 300);
			}
			return false;
		});

		//ios용 헤더
		var jbOffset = $( '.product_tit' ).offset();
			$( window ).scroll( function() {
				if ( $( document ).scrollTop() > jbOffset.top ) {
					$( '.product_tit' ).addClass('fixed');
				}
				else {
					$( '.product_tit' ).removeClass('fixed');
				}
			});
		});

	//팝업 마크업 테스트용
	function fnShowPop(sGetName){
		var $layer = $("#"+ sGetName);
		$layer.addClass("on");
	}
	function fnHidePop(sGetName){
		$("#"+ sGetName).removeClass("on");
		$('.product_list li').removeClass("on");
	}
</script>

<!-- #include virtual="/mobile/inc/footer.asp" -->