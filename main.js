// =========================
// ACTIVE NAVBAR LINK
// =========================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(
                '.navbar a[href*="' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};


// =========================
// TYPED JS EFFECT
// =========================

var typed = new Typed(".multiple-text", {
    strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Engineer",
        "C++ Programmer"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
    loop: true
});