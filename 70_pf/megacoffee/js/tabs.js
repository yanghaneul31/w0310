// tabs
import tabMenu from "./section2.js";

/* 
    ver.ES6
        1. const, let
        2. ()->{}
        3. 모듈(Module)

    a.js 파일에서 내보내기(export)
        const aFn = function (){...}
        export default aFn;
    b.js 파일에서 가져오기(import)
        import aFn from ./a.js;

    a.js 파일에서 내보내기(export)
        export const aFn = function (){...}
    b.js 파일에서 가져오기(import)
        import {aFn} from ./a.js;

*/


$(() => {
    // 배열+객체 데이터
    // const data = [
    //     {
    //         img: 'images/10020.jpg',
    //         txt: '왕메가헛개리카노'
    //     },
    //     {
    //         img: 'images/10022.jpg',
    //         txt: '왕메가사과유자'
    //     },
    //     {
    //         img: 'images/10025.jpg',
    //         txt: '엠지씨네 와왕 메가칩'
    //     }
    // ];

    // 객체 탐색
    const tabs = $("#tabs");
    const btn = tabs.find("#tabs_btn a");



    // 객체 생성
    // function tabMenu(i1, i2, i3) { 
    //     tabs_1.html(`
    //         <div>
    //             <div><img src="${data[i1].img}" alt="${data[i1].txt}"></div>
    //             <h3>1위. ${data[i1].txt}</h3>
    //         </div>
    //         <div>
    //             <div><img src="${data[i2].img}" alt="${data[i2].txt}"></div>
    //             <h3>1위. ${data[i2].txt}</h3>
    //         </div>
    //         <div>
    //             <div><img src="${data[i3].img}" alt="${data[i3].txt}"></div>
    //             <h3>1위. ${data[i3].txt}</h3>
    //         </div>
    //     `);
    // }


    
    tabMenu(0, 1, 2);
    
    // 이벤트
    btn.click(function (e) {
        // a태그 기본 이벤트(링크 이동) 막기
        e.preventDefault(); 
        
        // 모든 탭 버튼 색 초기화
        btn.css({color: "var(--gray2)"});
        // 현재 클릭한 탭만 색 변경
        $(this).css({color: "var(--main)"});


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