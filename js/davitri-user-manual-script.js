// Obtén el elemento del icono SVG
const sidebarNameIcon = document.getElementById("sidebar-name-icon");

// Cambia el icono SVG a la versión de hover cuando el mouse está sobre el icono
sidebarNameIcon.addEventListener("mouseover", () => {
    sidebarNameIcon.src = "img/sidebar/sidebar-davitri-icon-hover.svg";
});

// Cambia el icono SVG a la versión normal cuando el mouse sale del icono
sidebarNameIcon.addEventListener("mouseout", () => {
    sidebarNameIcon.src = "img/sidebar/sidebar-davitri-icon.svg";
});

// Otros códigos JavaScript que ya tenías
const sidebar = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".sidebar-menu");
const main = document.querySelector("main");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("max-sidebar");
    if (sidebar.classList.contains("max-sidebar")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if (window.innerWidth <= 320) {
        sidebar.classList.add("mini-sidebar");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("hidden");
        });
    }
});

sidebarNameIcon.addEventListener("click", () => {
    sidebar.classList.toggle("mini-sidebar");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("hidden");
    });
});
