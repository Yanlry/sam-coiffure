let slideIndex = 0;
const slides = document.getElementsByClassName("avis-slide");

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
});