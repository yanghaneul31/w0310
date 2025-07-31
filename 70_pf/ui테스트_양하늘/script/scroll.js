$(function () {
  // 풀페이지 스크롤
  let current = 0;
  const $sections = $('.section');
  const sectionCount = $sections.length;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index < 0 || index >= sectionCount) return;
    const targetTop = $sections.eq(index).offset().top;
    isScrolling = true;
    $('html, body').animate({ scrollTop: targetTop }, 700, function () {
      isScrolling = false;
      current = index;

      // 💥 스크롤 애니메이션 후 강제로 scroll 이벤트 트리거
      $(window).trigger('scroll');
    });
  }

  $(window).on('wheel', function (e) {
    if (isScrolling) return;
    const delta = e.originalEvent.deltaY;
    if (delta > 0) {
      scrollToSection(current + 1);
    } else {
      scrollToSection(current - 1);
    }
  });

  // 초기 로딩 시 현재 위치 파악
  $(window).on('load', function () {
    const scrollTop = $(window).scrollTop();
    $sections.each(function (i) {
      if (scrollTop >= $(this).offset().top) {
        current = i;
      }
    });

    // 초기 등장 체크
    $(window).trigger('scroll');
  });

  // 탭 메뉴 동작
  $('.tab').on('click', function () {
    const target = $(this).data('target');
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.product-group').removeClass('show');
    $('.' + target).addClass('show');
  });

  // ✨ #sec3 등장 애니메이션
  const $targets = $('#sec3 li');
  $targets.each(function (i) {
    $(this).addClass('scroll-fade');
    $(this).css('transition-delay', `${i * 0.1}s`);
  });

  $(window).on('scroll', function () {
    const winTop = $(window).scrollTop();
    const winBottom = winTop + $(window).height();

    $targets.each(function () {
      const $el = $(this);
      const elTop = $el.offset().top;

      if (winBottom > elTop + 100) {
        $el.addClass('on');
      }
    });
  });
});
