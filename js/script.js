/* =====================================================
   ELEMENTS
===================================================== */

const sun = document.querySelector(".sun");
const clouds = document.querySelectorAll(".cloud");
const hero = document.querySelector(".hero");


/* =====================================================
   INTERACTION VALUES
===================================================== */

let mouseX = 0;
let mouseY = 0;
let scrollY = 0;


/* =====================================================
   MOUSE PARALLAX
===================================================== */

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;

});


/* =====================================================
   SCROLL
===================================================== */

window.addEventListener("scroll", () => {

    scrollY = window.scrollY;

});


/* =====================================================
   ANIMATION LOOP
===================================================== */

function animateSky() {

    const heroHeight = hero.offsetHeight;

    const limitedScroll = Math.min(scrollY, heroHeight);

    const scrollSun = limitedScroll * 0.12;

    const sunX = mouseX * 20;
    const sunY = mouseY * 20 + scrollSun;

    sun.style.transform = `
        translate(${sunX}px, ${sunY}px)
    `;


    clouds.forEach((cloud, index) => {

        const depth = (index + 1) * 8;

        const cloudX = mouseX * depth;
        const cloudY = mouseY * depth;

        const scrollCloud = limitedScroll * (0.03 + index * 0.02);

        cloud.style.transform = `
            translate(
                ${cloudX}px,
                ${cloudY + scrollCloud}px
            )
        `;

    });


    requestAnimationFrame(animateSky);

}


/* =====================================================
   START ANIMATION
===================================================== */

animateSky();

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            } else {

                entry.target.classList.remove("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});