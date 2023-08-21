
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageURL = thumbnail.getAttribute('src');
        mainImage.innerHTML = `<img src="${imageURL}" alt="Image en grand">`;

        // Afficher la zone .main-image
        mainImage.style.display = 'block';

        // Réinitialiser les autres images
        thumbnails.forEach(otherThumbnail => {
            if (otherThumbnail !== thumbnail) {
                otherThumbnail.classList.remove('selected');
            }
        });

        thumbnail.classList.add('selected');
    });
});

// Ajouter un écouteur de clic global pour masquer la zone .main-image
document.addEventListener('click', event => {
    if (!event.target.classList.contains('thumbnail')) {
        mainImage.style.display = 'none';
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('selected');
        });
    }
});

// Empêcher la propagation du clic depuis la zone .main-image
mainImage.addEventListener('click', event => {
    event.stopPropagation();
});
