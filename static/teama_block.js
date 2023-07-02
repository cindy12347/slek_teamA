const reload = document.querySelector(".navbar_reload");
const hamburger = document.querySelector(".navbar_hamburger");
const arrow = document.querySelector(".navbar_arrow");
const navbar_menu = document.querySelector(".navbar_menu");
const navbar_link = document.querySelectorAll(".navbar_link");
const ref_click = document.querySelector(".ref_click");
const ref_list = document.querySelector(".ref_list");

const wrong_1 = document.querySelectorAll(".wrong_1");
const right_1 = document.querySelector(".right_1");
const wrong_2 = document.querySelectorAll(".wrong_2");
const right_2 = document.querySelector(".right_2");
const button_1 = document.querySelectorAll(".wrong_1, .right_1");
const button_2 = document.querySelectorAll(".wrong_2, .right_2");
const answer_1 = document.querySelectorAll(".answer_1");
const answer_2 = document.querySelectorAll(".answer_2");
const diagnosis_1layer_back_wrong = document.querySelectorAll(".diagnosis_1layer_back_wrong");
const diagnosis_1layer_back_right = document.querySelector(".diagnosis_1layer_back_right");
const right_block = document.querySelector(".right_block");
const diagnosis_block = document.querySelector(".diagnosis_block");


const additional_block = document.querySelector(".additional_block");
const additional = document.querySelector("#additional");

const diagnosis_2layer1_block = document.querySelector(".diagnosis_2layer1_block");
const diagnosis_2layer3_block = document.querySelector(".diagnosis_2layer3_block");
const diagnosis_2layer4_block = document.querySelector(".diagnosis_2layer4_block");


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

button_1.forEach(n => n.addEventListener("click", ()=> {
    diagnosis_1layer_back_right.classList.toggle("active");
    diagnosis_1layer_back_wrong.forEach(n => n.classList.toggle("active"));
    right_1.classList.toggle("active");
    wrong_1.forEach(n => n.classList.toggle("active"));
    right_1.disabled = true;
    wrong_1.forEach(n => n.disabled = true);

    diagnosis_block.style.height = "250px";

    right_block.style.display = "flex";
    introJs().start();
}))

button_2.forEach(n => n.addEventListener("click", ()=> {
    right_2.classList.toggle("active");
    wrong_2.forEach(n => n.classList.toggle("active"));
    right_2.disabled = true;
    wrong_2.forEach(n => n.disabled = true);
    right_1.classList.remove("active");
    right_1.classList.toggle("active2");
    diagnosis_1layer_back_right.classList.remove("active");
    diagnosis_1layer_back_right.classList.toggle("active2");
    right_block.classList.toggle("active");
    

    


    additional_block.style.display = "flex";
    $('html, body').animate({scrollTop: $('#additional').offset().top});
}))

