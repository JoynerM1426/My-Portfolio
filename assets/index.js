const hamburger = document.querySelector(".hamburger");
const navLi = document.querySelector(".nav_li");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLi.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navLi.classList.remove("active");
}) );