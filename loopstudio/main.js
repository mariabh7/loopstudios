const menu = document.getElementById("menu-nav");
const nav = document.getElementById("nav-bar");
const closeNav = document.getElementById("svg-s");
menu.addEventListener("click", () => {
    nav.style.display = "block";

});
closeNav.addEventListener("click", () => {
    nav.style.display = "none";
});