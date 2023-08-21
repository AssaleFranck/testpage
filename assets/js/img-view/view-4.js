
const thumbnails4 = document.querySelectorAll('.thumbnail-4');
const mainImage4 = document.querySelector('.main-image-4');

thumbnails4.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageURL = thumbnail.getAttribute('src');
        mainImage4.innerHTML = `<img src="${imageURL}" alt="Image en grand">`;

        // Afficher la zone .main-image
        mainImage4.style.display = 'block';

        // Réinitialiser les autres images
        thumbnails4.forEach(otherThumbnail => {
            if (otherThumbnail !== thumbnail) {
                otherThumbnail.classList.remove('selected');
            }
        });

        thumbnail.classList.add('selected');
    });
});

// Ajouter un écouteur de clic global pour masquer la zone .main-image
document.addEventListener('click', event => {
    if (!event.target.classList.contains('thumbnail-4')) {
        mainImage4.style.display = 'none';
        thumbnails4.forEach(thumbnail => {
            thumbnail.classList.remove('selected');
        });
    }
});

// Empêcher la propagation du clic depuis la zone .main-image
mainImage4.addEventListener('click', event => {
    event.stopPropagation();
});