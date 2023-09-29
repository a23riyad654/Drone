/*=============== SHOW MENU ===============*/
let nav = document.querySelector(".Naav");
let menu = document.querySelector(".nav__menu");
let item = document.querySelector(".nav-item");
let close_icon = document.querySelector(".btn_close");
let bar_icon = document.querySelector(".btn_bar");

function myFunction() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        nav.style.backgroundColor = "transparent" ;
        bar_icon.style.display = "block";
        nav.style.backgroundColor = " #001C30" ;


    } else {
        menu.style.display = "block";
        close_icon.style.display = "block";
        bar_icon.style.display = "none";

    }
}