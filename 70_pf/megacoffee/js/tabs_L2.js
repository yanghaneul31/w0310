// tabs
import tabMenu from "./section2.js";

$(() => {

    // 객체 탐색
    const tabs = $("#tabs");
    const btn = tabs.find("#tabs_btn a");

    tabMenu(0, 1, 2);

    // 이벤트
    btn.click(function (e) {
        // a태그 기본 이벤트(링크 이동) 막기
        e.preventDefault();

        // 모든 탭 버튼 색 초기화
        btn.css({ color: "var(--gray2)" });
        // 현재 클릭한 탭만 색 변경
        $(this).css({ color: "var(--main)" });


        // idx는 li의 순번 0, 1, 2, 3
        let idx = $(this).parent().index();

        // 제어문
        switch (idx) {
            case 0:
                tabMenu(0, 1, 2);
                break;
            case 1:
                tabMenu(1, 2, 0);
                break;
            case 2:
                tabMenu(2, 0, 1);
                break;
            default:
                tabMenu(1, 2, 0);
        }

    });

});