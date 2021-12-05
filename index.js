const mobileMenuButton = document.getElementById("mobile_menu_button");
const mobileMenu = document.getElementById("mobile_menu");

mobileMenuButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("show");
    mobileMenuButton.classList.toggle("close");
});