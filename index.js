const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")

function toggleMenuButton () {
    menu.style.display = "flex"
} 

menuButton.addEventListener('click', toggleMenuButton)