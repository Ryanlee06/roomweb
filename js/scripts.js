document.addEventListener('DOMContentLoaded', function() {
    const btnZh = document.getElementById('btn-zh');
    const btnEn = document.getElementById('btn-en');
    const elementsZh = document.querySelectorAll('[data-lang="zh"]');
    const elementsEn = document.querySelectorAll('[data-lang="en"]');
    const mapsZh = document.querySelectorAll('iframe[data-lang="zh"]');
    const mapsEn = document.querySelectorAll('iframe[data-lang="en"]');

    // 检查用户是否有语言偏好
    const preferredLang = localStorage.getItem('preferredLanguage') || 'zh';
    setLanguage(preferredLang);

    btnZh.addEventListener('click', function() {
        setLanguage('zh');
    });

    btnEn.addEventListener('click', function() {
        setLanguage('en');
    });

    function setLanguage(lang) {
        if(lang === 'zh') {
            elementsZh.forEach(el => el.style.display = '');
            elementsEn.forEach(el => el.style.display = 'none');
            btnZh.classList.add('active');
            btnEn.classList.remove('active');
            mapsZh.forEach(map => map.style.display = '');
            mapsEn.forEach(map => map.style.display = 'none');
            localStorage.setItem('preferredLanguage', 'zh');
        } else if(lang === 'en') {
            elementsZh.forEach(el => el.style.display = 'none');
            elementsEn.forEach(el => el.style.display = '');
            btnEn.classList.add('active');
            btnZh.classList.remove('active');
            mapsZh.forEach(map => map.style.display = 'none');
            mapsEn.forEach(map => map.style.display = '');
            localStorage.setItem('preferredLanguage', 'en');
        }
    }

    // 自动隐藏移动导航栏
    const navCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) { // Bootstrap的lg断点是992px
                new bootstrap.Collapse(navCollapse).toggle();
            }
        });
    });
});
