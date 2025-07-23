// tabs
// import data from './data.js';
// import { data } from "./data.js";
import tabsFn from "./layout.js";

$(function () {
    /* 
        1. 데이터 - 객체, 배열
        2. 함수 - 선언적, 익명(화살표)
        3. 이벤트 - click
        4. 제어문 - switch
        5. 연산자 - 대입(할당)
        6. 모듈(Module)화 -> new!!! (ver.ES6)
    */

    const data = [
        {
            img: './images/10020.jpg',
            txt: '왕메가헛개리카노'
        },
        {
            img: './images/10022.jpg',
            txt: '왕메가사과유자'
        },
        {
            img: './images/10025.jpg',
            txt: '엠지씨네 와앙 메가칩'
        }
    ];

    tabsFn(0,1,2);

    function tabsFn(num1, num2, num3) {
        $('#tabs-1').html(`
            <div>
                <div><img src="${data[num1].img}" alt="${data[num1].txt}"></div>
                <h3>1위. ${data[num1].txt}</h3>
            </div>
            <div>
                <div><img src="${data[num2].img}" alt="${data[num2].txt}"></div>
                <h3>2위. ${data[num2].txt}</h3>
            </div>
            <div>
                <div><img src="${data[num3].img}" alt="${data[num3].txt}"></div>
                <h3>3위. ${data[num3].txt}</h3>
            </div>
        `);
    }    

    // let idx;

    // 탭 버튼 클릭 이벤트
    $("#tabs_btn a").click(function (e) {
        e.preventDefault(); // a태그 기본 이벤트(링크 이동) 막기

        // 모든 탭 버튼 색 초기화
        $("#tabs_btn a").css("color", "var(--gray2)");
        // 현재 클릭한 탭만 색 변경
        $(this).css("color", "var(--main)");

        // 클릭한 탭의 href 속성값을 선택자로 활용해 해당 콘텐츠만 보여줌
        let idx = $(this).parent().index();
        
        let rank1, rank2, rank3;
        console.log(idx);
        switch (idx) {
            case 0: rank1 = 0; rank2 = 1; rank3 = 2; break;
            case 1: rank1 = 1; rank2 = 0; rank3 = 2; break;
            default: rank1 = 2; rank2 = 1; rank3 = 0;
        }

        tabsFn(rank1, rank2, rank3);

    });
});