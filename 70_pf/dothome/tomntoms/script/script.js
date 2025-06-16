// 문서(document)가 준비되면
$(document).ready(function () {
    // 메인 메뉴(.main>li)에 마우스를 올리면
    $('.main>li').mouseover(function () {
        // 서브 메뉴(.sub)가 위에서 아래로 나타난다.
        $('.sub').stop().slideDown();
        // .nav_bg의 높이가 150px로 서서히 커진다.
        $('.nav_bg').stop().animate({ height: 150 });
    });
    // 메인 메뉴(.main>li)에서 마우스가 나가면
    $('.main>li').mouseout(function () {
        // 서브 메뉴(.sub)가 아래서 위로 사라진다.
        $('.sub').stop().slideUp();
        // .nav_bg의 높이가 0px로 서서히 작아진다.
        $('.nav_bg').stop().animate({ height: 0 });
    });
});