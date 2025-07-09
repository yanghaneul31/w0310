// 2Depth Top-down Nav.ver.jQ

$(function () {
  $(".main > li").mouseenter(function () {
    $(this).find(".sub").addClass('active');
    $(this).siblings().find(".sub").removeClass('active');
    $(".nav_bg").addClass('active');
  });
  $(".gnb").mouseleave(function () {
    $(".sub, .nav_bg").removeClass('active');
  });
});