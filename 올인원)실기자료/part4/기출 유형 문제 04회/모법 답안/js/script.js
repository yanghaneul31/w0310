$(function () {//html문서 로딩 후 스크립트 실행
    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    //슬라이드
    let i = 0
    function slide() {
        if (i < 2) {
            i++;
        } else {
            i=0;
        }
        $(".slide ul").animate({ marginLeft: -100 * i + "%" }, 1000)
    }
    setInterval(slide, 3000);
    //탭메뉴
    let t;
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        t = $(this).index();//클릭한 li의 인덱스 번호 t에 할당
        console.log(t);//브라우저 F12를 눌러 콘솔창에서 확인

        $(".tabcon").hide();
        $(".tabcon").eq(t).show();
        return false;//링크차단
    })
    //팝업
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close button").click(function(){
        $(".popup").hide();
    })
})