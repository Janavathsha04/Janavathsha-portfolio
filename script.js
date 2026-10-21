// ================================
// JANAVATHSHA PORTFOLIO JAVASCRIPT
// ================================


// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}


themeBtn.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");

        localStorage.setItem("portfolio-theme", "light");

    } else {

        document.documentElement.setAttribute("data-theme", "dark");

        localStorage.setItem("portfolio-theme", "dark");
    }

});


// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


// Typing Effect
const typingText = document.getElementById("typingText");

const phrases = [
    "digital experiences.",
    "responsive websites.",
    "ideas into reality.",
    "creative interfaces."
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {

        typingText.textContent =
            currentPhrase.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentPhrase.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentPhrase.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            phraseIndex++;

            if (phraseIndex >= phrases.length) {
                phraseIndex = 0;
            }

        }

    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}


typeEffect();


// Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// Scroll Progress
const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    scrollProgress.style.width =
        progress + "%";

});


// Back To Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Project Filtering
const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// Copy GitHub Profile
const copyBtn =
    document.getElementById("copyBtn");

const copyMessage =
    document.getElementById("copyMessage");


copyBtn.addEventListener("click", async () => {

    const githubURL =
        "https://github.com/Janavathsha04";


    try {

        await navigator.clipboard.writeText(githubURL);

        copyMessage.textContent =
            "GitHub profile copied!";

        copyBtn.textContent =
            "Copied ✓";


        setTimeout(() => {

            copyMessage.textContent = "";

            copyBtn.textContent =
                "Copy GitHub Profile";

        }, 2000);


    } catch (error) {

        copyMessage.textContent =
            "Copy failed. Please copy the link manually.";

    }

});


// Active Navigation
const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 130;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// Current Year
document.getElementById("year").textContent =
    new Date().getFullYear();