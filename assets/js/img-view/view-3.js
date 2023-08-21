
const thumbnails3 = document.querySelectorAll('.thumbnail-3');
const mainImage3 = document.querySelector('.main-image-3');

thumbnails3.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageURL = thumbnail.getAttribute('src');
        mainImage3.innerHTML = `<img src="${imageURL}" alt="Image en grand">`;

        // Afficher la zone .main-image
        mainImage3.style.display = 'block';

        // Réinitialiser les autres images
        thumbnails3.forEach(otherThumbnail => {
            if (otherThumbnail !== thumbnail) {
                otherThumbnail.classList.remove('selected');
            }
        });

        thumbnail.classList.add('selected');
    });
});

// Ajouter un écouteur de clic global pour masquer la zone .main-image
document.addEventListener('click', event => {
    if (!event.target.classList.contains('thumbnail-3')) {
        mainImage3.style.display = 'none';
        thumbnails3.forEach(thumbnail => {
            thumbnail.classList.remove('selected');
        });
    }
});

// Empêcher la propagation du clic depuis la zone .main-image
mainImage3.addEventListener('click', event => {
    event.stopPropagation();
});