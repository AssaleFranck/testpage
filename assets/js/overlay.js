$(document).ready(function () {

    const overlays = document.querySelectorAll('.overlay');

    overlays.forEach(function(overlay) {
      const additionalParagraph = overlay.querySelector('.description');
    
      overlay.addEventListener('click', function() {
        additionalParagraph.style.display = 'block';
      });
    
      overlay.addEventListener('mouseover', function() {
        additionalParagraph.style.display = 'block';
      });
    
      overlay.addEventListener('mouseout', function() {
        additionalParagraph.style.display = 'none';
      });
    });
    
    
    
});
// $(document).ready(function () {

//     const overlay = document.querySelector('.overlay');
//     const additionalParagraph = document.querySelector('.description');
      
//     overlay.addEventListener('click', function() {
//         additionalParagraph.style.display = 'block';
//     });

//     overlay.addEventListener('mouseover', function() {
//         additionalParagraph.style.display = 'block';
//     });

//     overlay.addEventListener('mouseout', function() {
//         additionalParagraph.style.display = 'none';
//     });
    
    
// });