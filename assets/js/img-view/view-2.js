
const thumbnails2 = document.querySelectorAll('.thumbnail-2');
const mainImage2 = document.querySelector('.main-image-2');

thumbnails2.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageURL = thumbnail.getAttribute('src');
        mainImage2.innerHTML = `<img src="${imageURL}" alt="Image en grand">`;

        // Afficher la zone .main-image
        mainImage2.style.display = 'block';

        // Réinitialiser les autres images
        thumbnails2.forEach(otherThumbnail => {
            if (otherThumbnail !== thumbnail) {
                otherThumbnail.classList.remove('selected');
            }
        });

        thumbnail.classList.add('selected');
    });
});

// Ajouter un écouteur de clic global pour masquer la zone .main-image
document.addEventListener('click', event => {
    if (!event.target.classList.contains('thumbnail-2')) {
        mainImage2.style.display = 'none';
        thumbnails2.forEach(thumbnail => {
            thumbnail.classList.remove('selected');
        });
    }
});

// Empêcher la propagation du clic depuis la zone .main-image
mainImage2.addEventListener('click', event => {
    event.stopPropagation();
});