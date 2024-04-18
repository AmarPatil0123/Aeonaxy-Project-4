document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const presentSRC = localStorage.getItem("profile-pic");
    const profile = document.querySelector(".profile-pic");

    if (presentSRC) {
        profile.src = presentSRC;
    }

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("hide-show");
        hamburger.classList.toggle("fa-xmark");
        navbar.classList.toggle("incr-nav");
    });
})
