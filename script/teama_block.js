const hamburger = document.querySelector(".navbar_hamburger");
const navbar_menu = document.querySelector(".navbar_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar_menu.classList.toggle("active");
})

document.querySelectorAll(".navbar_link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navbar_menu.classList.remove("active");
}));
