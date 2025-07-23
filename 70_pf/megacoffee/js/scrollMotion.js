// jQuery Scroll Motion

$(() => {
    // 객체 탐색
    const windowObj = $(window);
    const motionObj = $('#fav_txt .scroll_motion');

    // 이벤트
    windowObj.scroll(function () {
        motionObj.each(function () {
            // boxTop은 요소의 문서 기준(top) 위치 (px)
            let boxTop = $(this).offset().top;
            // scrollTop은 현재 문서에서 위쪽으로 스크롤한 거리 (px)
            let scrollTop = $(window).scrollTop();
            // windowHeight는 브라우저 화면의 높이 (viewport 높이)
            let windowHeight = $(window).height();

            // 화면에 요소가 보이면 show 클래스 추가, 아니면 제거
            // +100은 화면에 완전히 들어오기 전에 미리 감지하기 위한 보정값
            if (scrollTop + windowHeight > boxTop + 100) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });
});