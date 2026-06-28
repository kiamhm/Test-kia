
document.addEventListener("DOMContentLoaded", () => {
});



function toggleTheme() {
    document.body.classList.toggle("dark");
}



function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}



function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}



document.addEventListener("click", function (e) {
    const menu = document.querySelector(".menu");
    const btn = document.querySelector(".menu-btn");

    if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }
});



function saveData(key, value) {
    localStorage.setItem(key, value);
}

function getData(key) {
    return localStorage.getItem(key);
}