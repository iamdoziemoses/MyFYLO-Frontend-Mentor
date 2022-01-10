// Show menu
function showMenu() {
    const toggle = document.getElementById('toggle');
    const navMenu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-nav');
        toggle.classList.toggle('rotate')
    })
}

showMenu();

// CHANGE BACKGROUND HEADER
function changeBgHeader() {
    const nav = document.getElementById('header')

    if (this.scrollY > 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollToTop);


// SHOW SCROLL TOP
function scrollToTop() {
    const _scrollTop = document.getElementById('scrolltop');
    if (this.scrollY > 560) {
        _scrollTop.classList.add('show-scroll');
    } else {
        _scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollToTop);