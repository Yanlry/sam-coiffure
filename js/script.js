document.addEventListener("DOMContentLoaded", function() {
    // CAROUSEL
    const galleryGrid = document.querySelector('.gallery-grid-home');
    if (galleryGrid) {
        const originalItems = Array.from(galleryGrid.children); // Récupère les éléments d'origine
        const cloneCount = 2; // Nombre d'éléments à cloner

        // Cloner les premiers éléments et les ajouter à la fin
        for (let i = 0; i < cloneCount; i++) {
            const clone = originalItems[i].cloneNode(true); // Clone l'élément
            galleryGrid.appendChild(clone); // Ajoute le clone à la fin de la galerie
        }

        let scrollAmount = 0;
        const scrollSpeed = 2; // Pixels à défiler à chaque intervalle
        const intervalSpeed = 20; // Millisecondes entre chaque appel

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

    // SLIDER D'AVIS
    let slideIndex = 0;
    const slides = document.getElementsByClassName("avis-slide");

    function showSlides(n) {
        if (slides.length) {
            if (n >= slides.length) { slideIndex = 0; }
            if (n < 0) { slideIndex = slides.length - 1; }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex].style.display = "block";
        }
    }

    // Afficher la première slide au chargement
    showSlides(slideIndex);

    // NAVIGATION POUR LES SLIDES
    const plusSlides = (n) => {
        slideIndex += n;
        showSlides(slideIndex);
    }

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

        // Fermer le menu hamburger via l'overlay
        overlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            contactMenu.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Fermer le menu hamburger via la croix
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
});
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const modal = document.getElementById('galleryModal');
const modalThumbnails = document.querySelectorAll('.modal-thumbnail');

// Afficher l'image dans le carrousel
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

// Lorsque l'on clique sur une miniature dans le modal
function showModalImage(index) {
    showImage(index); // Affiche l'image sélectionnée dans le carrousel
    closeModal(); // Ferme le modal
}

// Événement de fermeture du modal si on clique en dehors
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.querySelectorAll('.service-item-home').forEach(item => {
    item.addEventListener('click', () => {
        // Supprimer la classe active de tous les services
        document.querySelectorAll('.service-item-home').forEach(el => el.classList.remove('active'));
        
        // Ajouter la classe active à l'élément cliqué
        item.classList.add('active');
    });
});
