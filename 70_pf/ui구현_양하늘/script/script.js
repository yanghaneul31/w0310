 

 $(document).ready(function () {
  // fullpage 초기화 (2.9.7 방식)
  $('#fullpage').fullpage({
    autoScrolling: true,
    navigation: true,
    scrollHorizontally: false
  });

  // 탭 버튼
  $('.tab-btn').on('click', function () {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    var target = $(this).data('target');
    $('.products-tab').addClass('hidden');
    $('#' + target).removeClass('hidden');
  });

  // 이미지 슬라이드
  var $inner = $('.inner');
  var i = 0;
  setInterval(function () {
    $inner.eq(i).removeClass('show');
    i = (i + 1) % $inner.length;
    $inner.eq(i).addClass('show');
  }, 3000);

  // 브랜드 섹션 등장 애니메이션
  var $brand = $('.brand-section');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $brand.addClass('show');
      }
    });
  }, { threshold: 0.4 });

  var brandDom = $brand.get(0); // jQuery → DOM
  if (brandDom) observer.observe(brandDom);
});
