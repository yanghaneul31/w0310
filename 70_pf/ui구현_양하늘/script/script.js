 new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      scrollHorizontally: false
    });

    // 탭 버튼 스크립트
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.products-tab');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        tabs.forEach(tab => {
          if (tab.id === btn.dataset.target) {
            tab.classList.remove('hidden');
          } else {
            tab.classList.add('hidden');
          }
        });
      });
    });

    // 브랜드 섹션 등장 애니메이션
    document.addEventListener('DOMContentLoaded', () => {
      const brand = document.querySelector('.brand-section');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            brand.classList.add('show');
          }
        });
      }, { threshold: 0.4 });

      observer.observe(brand);
    });



const inner = document.querySelectorAll(".inner");
let i = 0;
setInterval(() => {
  inner[i].classList.remove("show")
  i = (i + 1) % inner.length;
  inner[i].classList.add("show");

}, 3000);