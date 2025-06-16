$(document).ready(function () {
    $('.main').mouseover(function () {
        $('.sub').stop().slideDown();
    });
    $('.main').mouseout(function () {
        $('.sub').stop().slideUp();
    });
});