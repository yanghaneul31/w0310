// JavaScript

$(function () {
  $(".slide").bxSlider({
    mode: "fade", // 'horizontal(기본값)', 'vertical'
    // 자동 슬라이드
    auto: true,
    // 좌우(next/prev) 버튼
    controls: false,
    stopAutoOnClick: true,
    // 일지정지/실행 버튼
    autoControls: true,
    // 중앙의 동그라미: pagination 또는 indicator
    // pager: false,
    // 멀티스라이드의 하나의 슬라이드 크기
    // slideWidth: 1440
  });
});
