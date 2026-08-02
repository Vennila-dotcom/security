/*==============================
HAMBURGER MENU
==============================*/

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/*==============================
SCROLL REVEAL
==============================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

/*==============================
ANIMATED COUNTERS
==============================*/

const counters = document.querySelectorAll(".counter");
let counterStarted = false;function startCounters() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current).toLocaleString();

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target.toLocaleString();

            }

        }

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats || counterStarted) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        startCounters();

    }

});

/*==============================
MAGNETIC BUTTON
==============================*/

const magneticBtn = document.querySelector(".magnetic-btn");

if (magneticBtn) {

    magneticBtn.addEventListener("mousemove", (e) => {

        const rect = magneticBtn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        magneticBtn.style.transform =
            `translate(${x * 0.18}px, ${y * 0.18}px)`;

    });

    magneticBtn.addEventListener("mouseleave", () => {

        magneticBtn.style.transform = "translate(0,0)";

    });

}/*==============================
OPTIONAL PARALLAX EFFECT
==============================*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollY = window.pageYOffset;

    heroImage.style.transform = `translateY(${scrollY * 0.08}px)`;

});

/*==============================
ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {

        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (!link) return;

        if (scrollPos >= top && scrollPos < top + height) {
            document
                .querySelectorAll(".nav-links a")
                .forEach(a => a.classList.remove("active"));

            link.classList.add("active");
        }

    });

});

/*==============================
HEADER SHADOW ON SCROLL
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";

    }

});

/*==============================
CONTACT FORM (DEMO)
==============================*/

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        form.reset();

    });

}

/*==============================
END OF SCRIPT
==============================*/