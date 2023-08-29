$(document).ready(function(){
    $('.slider-2').slick({
        slidesToShow: 3, // Nombre d'icônes à afficher à la fois
        slidesToScroll: 2,
        autoplay: true, // Défilement automatique
        autoplaySpeed: 1500, // Délai entre chaque défilement (en millisecondes)
        infinite: true, // Défilement infini
        prevArrow: false, // Masquer la flèche précédente
        nextArrow: false, // Masquer la flèche suivante
        // onInit: function() {
        //     // Récupérer toutes les divs .card dans le carrousel
        //     var cards_w = $('.slider-2 .card-w');
            
        //     // Redimensionner les divs .card
        //     cards_w.css('width', '40%');
            
        //     // Récupérer toutes les divs .chevron dans le carrousel
        //     var chevrons = $('.slider-2 .chevron-w');
        //     // Redimensionner les divs .chevron
        //     chevrons.css('height', '100%');
        
        // }
        
    });
    var containerHeight = $('.slider-2').height();
    $('.chevron-h').css('height', containerHeight - 1 + 'px');
});