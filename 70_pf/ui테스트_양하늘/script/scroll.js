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
  });

  // 탭 메뉴 동작
  $('.tab').on('click', function () {
    const target = $(this).data('target');
    $('.tab').removeClass('active');
    $(this).addClass('active');

    $('.product-group').removeClass('show');
    $('.' + target).addClass('show');
  });
});
