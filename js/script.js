const hamburguerButton = document.querySelector(".hamburguer_button");
const mobileNav = document.querySelector(".mobile-nav");

hamburguerButton.addEventListener("click", ()=>{
mobileNav.classList.toggle("display-none");
})