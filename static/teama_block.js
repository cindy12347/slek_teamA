const hamburger = document.querySelector(".navbar_hamburger");
const navbar_menu = document.querySelector(".navbar_menu");
const navbar_link = document.querySelectorAll(".navbar_link");
const ref_click = document.querySelector(".ref_click");
const ref_list = document.querySelector(".ref_list");
const wrong2 = document.querySelectorAll(".wrong2");
const right2 = document.querySelector(".right2");
const wrong5 = document.querySelectorAll(".wrong5");
const right5 = document.querySelector(".right5");
const additional_block = document.querySelector(".additional_block");
const additional = document.querySelector("#additional");
const button2 = document.querySelectorAll(".wrong2, .right2");
const button5 = document.querySelectorAll(".wrong5, .right5");
const diagnosis_2button_block = document.querySelector(".diagnosis_2button_block");
const diagnosis_5button_block = document.querySelector(".diagnosis_5button_block");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar_menu.classList.toggle("active");
})

navbar_link.forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navbar_menu.classList.remove("active");
}));

function book_click(){
    ref_click.addEventListener("click", () => {
        ref_click.classList.toggle("active");
        ref_list.classList.toggle("active");
    })
}

button2.forEach(n => n.addEventListener("click", ()=> {
    right2.classList.toggle("active");
    wrong2.forEach(n => n.classList.toggle("active"));
    right2.disabled = true;
    wrong2.forEach(n => n.disabled = true);

    diagnosis_2button_block.style.display = "none";
    diagnosis_5button_block.style.display = "flex";
}))

button5.forEach(n => n.addEventListener("click", ()=> {
    right5.classList.toggle("active");
    wrong5.forEach(n => n.classList.toggle("active"));
    right5.disabled = true;
    wrong5.forEach(n => n.disabled = true);

    additional_block.style.display = "flex";
    $('html, body').animate({scrollTop: $('#additional').offset().top});
}))

