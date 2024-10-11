document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const closeIcon = document.getElementById('close-icon');

    // Lorsque le menu hamburger est cliqué
    menuIcon.addEventListener('click', () => {
        setTimeout(() => {
            navLinks.classList.add('active'); // Affiche le menu après un léger délai
            overlay.classList.add('active'); // Affiche l'overlay
        }, 10);
    });

    // Lorsque l'overlay est cliqué, fermer le menu
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cache le menu
        overlay.classList.remove('active'); // Cache l'overlay
    });

    // Lorsque la croix est cliquée, fermer le menu
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cache le menu
        overlay.classList.remove('active'); // Cache l'overlay
    });
});
