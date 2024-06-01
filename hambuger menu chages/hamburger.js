document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');
    const navItemElements = document.querySelectorAll('.nav-item');

    navItemElements.forEach((item, index) => {
        item.style.setProperty('--i', index); 
    });

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); 
        navItems.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (!navItems.contains(e.target) && !hamburger.contains(e.target)) {
            navItems.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
            hamburger.classList.add('hidden');
        } else {
            hamburger.classList.remove('hidden');
        }
        navItems.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
