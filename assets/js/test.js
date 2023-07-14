

window.addEventListener('scroll', function() {
  var element = document.getElementById('#test');
  var elementPosition = element.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2; // Ajustez cette valeur selon vos besoins

  if (elementPosition < screenPosition) {
    // L'utilisateur a fait défiler jusqu'au niveau de l'élément cible
    // Placez votre code d'action ici
    console.log("L'utilisateur a atteint l'élément cible !");
  }
});

// ---------------------------------


// const seats = document.querySelectorAll('.seat');

// window.addEventListener('DOMContentLoaded', function() {
//   const containerWidth = document.querySelector('.container').offsetWidth;

//   seats.forEach(function(seat, index) {
//     seat.style.left = -50 + 'px'; /* Ajustez la position initiale hors de la zone visible */
//     seat.style.transitionDelay = (index * 0.5) + 's'; /* Ajustez le délai progressif */
//     seat.style.transitionProperty = 'left, opacity'; /* Ajoutez la propriété de transition pour l'opacité */
//   });

//   setTimeout(function() {
//     seats.forEach(function(seat, index) {
//       seat.style.left = index * 30 + 'px'; /* Ajustez l'espacement horizontal */
//       seat.style.opacity = 1; /* Rendre l'élément visible */
//     });
//   }, 2000);
// });

// ------------------------------------------

// Sélectionnez l'élément dont vous souhaitez obtenir la position
var $element = $('#container');

// Obtenez les coordonnées de l'élément
var offset = $element.offset();

// Les coordonnées de l'élément
console.log('Position par rapport au document :');
console.log('Top :', offset.top);
console.log('Left :', offset.left);