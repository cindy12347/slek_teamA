const hamburger = document.querySelector(".navbar_hamburger");
const navbar_menu = document.querySelector(".navbar_menu");
const ref_click = document.querySelector(".ref_click");
const ref_list = document.querySelector(".ref_list");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar_menu.classList.toggle("active");
})

document.querySelectorAll(".navbar_link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navbar_menu.classList.remove("active");
}));


function book_click(){
    ref_click.addEventListener("click", () => {
        ref_click.classList.toggle("active");
        ref_list.classList.toggle("active");
    })

}