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
