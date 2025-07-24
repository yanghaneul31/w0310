 

  document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      scrollHorizontally: false,
      licenseKey: 'YOUR_KEY_HERE' // 또는 null
    });

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
  });

 document.addEventListener("DOMContentLoaded", function () {
    const inner = document.querySelectorAll(".inner");
    let i = 0;

    setInterval(() => {
      inner[i].classList.remove("show");
      i = (i + 1) % inner.length;
      inner[i].classList.add("show");
    }, 3000);
  });

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
