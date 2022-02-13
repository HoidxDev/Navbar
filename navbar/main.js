
const nav = document.querySelector("nav");
const burger = document.querySelector("#izgara");
const navlinks = document.querySelector("#navlinks")
const navlink = document.querySelectorAll("#navlinks li")
const bir = document.querySelector("#buba")
const iki = document.querySelector("#dede")
const uc = document.querySelector("#nine")
burger.addEventListener("click", () => {
        navlinks.classList.toggle("navactive")
    bir.classList.toggle("bir")
    iki.classList.toggle("iki")
    uc.classList.toggle("uc")
    for (link of navlink) {
            if (link.style.animation) {
                link.style.animation = ""
        } else {
                link.style.animation = `navKey 0.5s ease forwards 0.7s`
        }
    }
})