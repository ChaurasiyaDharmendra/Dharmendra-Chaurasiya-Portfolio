// Typing effect
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: [
            'MERN Stack Developer',
            'Software Engineer',
            'DSA Problem Solver',
            'AI Tools Explorer'
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1200,
        loop: true
    });
}

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menuIcon = menuBtn.querySelector('i');

function closeMenu() {
    navbar.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'bx bx-menu';
}

menuBtn.addEventListener('click', () => {
    const open = navbar.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuIcon.className = open ? 'bx bx-x' : 'bx bx-menu';
});

navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

// Highlight the active link while scrolling
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.navbar a');

function setActive() {
    const y = window.scrollY + 140;
    sections.forEach(sec => {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id));
        }
    });
}

window.addEventListener('scroll', setActive, { passive: true });
setActive();