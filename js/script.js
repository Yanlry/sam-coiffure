//CAROUSEL
const galleryGrid = document.querySelector('.gallery-grid');
const originalItems = galleryGrid.children; // Récupère les éléments d'origine
const cloneCount = 2; // Nombre d'éléments à cloner

// Cloner les premiers éléments et les ajouter à la fin
for (let i = 0; i < cloneCount; i++) {
    const clone = originalItems[i].cloneNode(true); // Clone l'élément
    galleryGrid.appendChild(clone); // Ajoute le clone à la fin de la galerie
}

let scrollAmount = 0;

// Modifie ces valeurs pour contrôler la vitesse de défilement
const scrollSpeed = 2; // Pixels à défiler à chaque intervalle
const intervalSpeed = 20; // Millisecondes entre chaque appel

function autoScroll() {
    scrollAmount += scrollSpeed; // Ajuste cette valeur pour contrôler la vitesse de défilement

    // Défilement automatique
    galleryGrid.scrollLeft += scrollSpeed;

    // Vérifie si nous sommes à la fin des éléments d'origine
    if (galleryGrid.scrollLeft >= galleryGrid.scrollWidth / 2) {
        galleryGrid.scrollLeft = 0; // Réinitialise la position
    }
}

// Démarrer le défilement automatique uniquement si la largeur de la fenêtre est supérieure à 768 pixels
if (window.innerWidth > 768) {
    setInterval(autoScroll, intervalSpeed); // Démarre le défilement automatique uniquement sur grand écran
}

//DEFILEMENT
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

//OVERLAY
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const closeIcon = document.getElementById('close-icon');
    const contactIcon = document.getElementById('contact-icon');
    const contactMenu = document.getElementById('contact-menu');
    const closeContactIcon = document.getElementById('close-contact-icon');

    // Lorsque le menu hamburger est cliqué
    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active'); // Affiche le menu
        overlay.classList.add('active'); // Affiche l'overlay
    });

    // Lorsque l'overlay est cliqué, fermer le menu
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        contactMenu.classList.remove('active');
    });

    // Lorsque la croix est cliquée, fermer le menu
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cache le menu
        overlay.classList.remove('active'); // Cache l'overlay
    });

    // Lorsque l'icône de contact est cliquée
    contactIcon.addEventListener('click', () => {
        contactMenu.classList.add('active'); // Affiche le menu contact
        overlay.classList.add('active'); // Affiche l'overlay
    });

    // Lorsque la croix dans le menu contact est cliquée, fermer le menu contact
    closeContactIcon.addEventListener('click', () => {
        contactMenu.classList.remove('active'); // Cache le menu contact
        overlay.classList.remove('active'); // Cache l'overlay
    });
});

//NAVBAR ACTIF/INATIF
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Ajoute ou enlève la classe active pour afficher le menu
});
