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

// Démarrer le défilement automatique
setInterval(autoScroll, intervalSpeed); // Ajuste cette valeur pour la fluidité du défilement
