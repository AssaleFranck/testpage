// const accordionItems = document.querySelectorAll('.accordion-item');

// accordionItems.forEach(item => {
//   const btn = item.querySelector('.accordion-btn');
//   btn.addEventListener('click', () => {
//     item.classList.toggle('active');
//   });
// });


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const btn = item.querySelector('.accordion-btn');
  btn.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      closeAllSections(); // Ferme toutes les autres sections avant d'ouvrir celle sélectionnée
    }
    item.classList.toggle('active');
  });
});

function closeAllSections() {
  accordionItems.forEach(item => {
    item.classList.remove('active');
  });
}
