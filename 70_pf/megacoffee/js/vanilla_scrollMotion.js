// JavaScript Scroll Motion

document.addEventListener("DOMContentLoaded", function () {
    // 객체 탐색
    const motionElements = document.querySelectorAll("#fav_txt .scroll_motion");

    // 이벤트
    window.addEventListener("scroll", function () {
        motionElements.forEach(function (el) {
            // boxTop은 요소의 문서 기준(top) 위치 (px)
            const boxTop = el.getBoundingClientRect().top + window.scrollY;
            // scrollTop은 현재 문서에서 위쪽으로 스크롤한 거리 (px)
            const scrollTop = window.scrollY;
            // windowHeight는 브라우저 화면의 높이 (viewport 높이)
            const windowHeight = window.innerHeight;

            // 화면에 요소가 보이면 show 클래스 추가, 아니면 제거
            if (scrollTop + windowHeight > boxTop + 100) {
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }
        });
    });
});