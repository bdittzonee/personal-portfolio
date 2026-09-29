const sky = document.querySelector(".sky-elements");
const sun = document.querySelector(".sun");
const clouds = document.querySelectorAll(".cloud");

document.addEventListener("mousemove", (event) => {

    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    sun.style.transform = `
        translate(${mouseX * 20}px, ${mouseY * 20}px)
    `;

    clouds.forEach((cloud, index) => {

        const depth = (index + 1) * 8;

        cloud.style.transform = `
            translate(${mouseX * depth}px, ${mouseY * depth}px)
        `;

    });

});