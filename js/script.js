// Afficher l'image dans le carrousel de la page index
document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.querySelector('.home-gallery-grid');
    if (galleryGrid) {
        const originalItems = Array.from(galleryGrid.children); 
        const cloneCount = 2; 

        // Cloner les premiers éléments et les ajouter à la fin
        for (let i = 0; i < cloneCount; i++) {
            const clone = originalItems[i].cloneNode(true); 
            galleryGrid.appendChild(clone); 
        }

        let scrollAmount = 0;
        const scrollSpeed = 2;
        const intervalSpeed = 20;

        function autoScroll() {
            scrollAmount += scrollSpeed;
            galleryGrid.scrollLeft += scrollSpeed;

            // Réinitialise la position une fois la moitié du contenu parcouru
            if (galleryGrid.scrollLeft >= galleryGrid.scrollWidth / 2) {
                galleryGrid.scrollLeft = 0;
            }
        }

        // Démarrer le défilement automatique uniquement si la largeur de la fenêtre est supérieure à 768 pixels
        if (window.innerWidth > 768) {
            setInterval(autoScroll, intervalSpeed);
        }
    }
});

// ------------------------------------------------------------------------------------------------------------------------------------------------


// Défilement des avis
let slideIndex = 0;
const slides = document.getElementsByClassName("avis-slide");

function showSlides(n) {
    if (slides.length) {
        // S'assurer que l'indice est dans les limites
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        // Masquer toutes les slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Afficher la slide courante
        slides[slideIndex].style.display = "block";
    }
}

// Afficher la première slide au chargement
showSlides(slideIndex);

// Navigation pour les slides
function plusSlides(n) {
    // Incrémente ou décrémente l'index de la slide
    slideIndex += n;

    // Afficher la nouvelle slide après changement d'indice
    showSlides(slideIndex);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------


// Menu overlay/hamburger et contact
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const closeIcon = document.getElementById('close-icon');
const contactIcon = document.getElementById('contact-icon');
const contactMenu = document.getElementById('contact-menu');
const closeContactIcon = document.getElementById('close-contact-icon');

if (menuIcon && navLinks && overlay) {
    // Ouvrir le menu hamburger
    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
        overlay.classList.add('active');
    });

    // Fermer le menu via l'overlay
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        contactMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Fermer le menu via la croix
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Ouvrir le menu de contact
    contactIcon.addEventListener('click', () => {
        contactMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Fermer le menu de contact via la croix
    closeContactIcon.addEventListener('click', () => {
        contactMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// ------------------------------------------------------------------------------------------------------------------------------------------------


// Afficher l'image dans le carrousel de la page galerie
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const modal = document.getElementById('galleryModal');
const modalThumbnails = document.querySelectorAll('.modal-thumbnail');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
    currentIndex = index;
}

// Passer à l'image suivante
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Passer à l'image précédente
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Ouvrir le modal
function openModal() {
    modal.style.display = 'block';
}

// Fermer le modal
function closeModal() {
    modal.style.display = 'none';
}

// Afficher l'image sélectionnée dans le carrousel et fermer le modal
function showModalImage(index) {
    showImage(index);
    closeModal();
}

// Fermer le modal si on clique en dehors
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Gestion de la section services sur la page d'accueil et sur la page services
document.querySelectorAll('.home-service-item, .service-item').forEach(item => {
    item.addEventListener('click', () => {
        // Supprimer la classe active de tous les services
        document.querySelectorAll('.home-service-item, .service-item').forEach(el => el.classList.remove('active'));
        
        // Ajouter la classe active à l'élément cliqué
        item.classList.add('active');
    });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelectorAll('.price-item').forEach(item => {
    item.addEventListener('click', function() {
        // Supprimer la classe active de tous les items
        document.querySelectorAll('.price-item').forEach(el => el.classList.remove('active'));

        // Ajouter la classe active à l'élément cliqué
        this.classList.add('active');
    });
});
