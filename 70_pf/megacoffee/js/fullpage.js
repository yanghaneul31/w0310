// fullpage.js

$("#fullpage").fullpage({
    sectionsColor: ["navy", "transparent", "blue", "darkblue"],
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    menu: "#menu",
    navigation: true,
    navigationTooltips: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    showActiveTooltip: true,
    /* navigationPosition: 'right', */
    slidesNavigation: true,
    scrollingSpeed: 500,
    // 현재 페이지를 떠날 때
    onLeave: function (index, nextIndex, direction) {
        if (index == 2) {
            $("#sec3 .scroll_motion").animate({ opacity: 1, left: 0 }, 10);
            $("#sec3 p").animate({ opacity: 1, left: 0 }, 10);
        }
    },
    // 현재 페이지에 도착한 이후
    afterLoad: function (anchorLink, index) {
        if (index == 2) {
            $("#sec3 .scroll_motion").animate({ opacity: 0, left: -400 }, 10);
            $("#sec3 p").animate({ opacity: 0, left: -400 }, 10);
        }
    }
});