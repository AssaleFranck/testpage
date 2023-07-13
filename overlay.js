$(document).ready(function () {

    const overlay = document.querySelector('.overlay');
    const additionalParagraph = document.querySelector('.description');
      
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