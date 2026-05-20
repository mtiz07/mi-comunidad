// TITULO ANIMADO
let titulo = document.getElementById("titulo");

titulo.addEventListener("mouseover", function () {

    titulo.style.color = "#ffffff";
    titulo.style.transform = "scale(1.08)";
    titulo.style.textShadow = "0 0 15px rgba(255,255,255,0.8)";

});

titulo.addEventListener("mouseout", function () {

    titulo.style.color = "#ffd166";
    titulo.style.transform = "scale(1)";
    titulo.style.textShadow = "none";

});

// BOTON MENSAJE
let boton = document.getElementById("mensajeBtn");

boton.addEventListener("click", function () {

    alert("Bienvenido a San Jerónimo Silacayoapilla");

});

// EFECTO SCROLL HEADER
window.addEventListener("scroll", function () {

    let header = document.getElementById("header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// BOTON SUBIR ARRIBA
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});