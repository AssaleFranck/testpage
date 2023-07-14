$(document).ready(function(){
    var slider = $('.slider-2');
    var slidesToShow = getSlidesToShow();

    slider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: false,
        // prevArrow: '<button type="button" class="slick-prev">Précédent</button>',
        nextArrow: false
    });

    $(window).on('resize', function() {
        var newSlidesToShow = getSlidesToShow();
        if (slidesToShow !== newSlidesToShow) {
            slidesToShow = newSlidesToShow;
            slider.slick('slickSetOption', 'slidesToShow', slidesToShow, true);
        }
    });

    function getSlidesToShow() {
        if ($(window).width() >= 768) {
            return 9; // Afficher 3 cartes sur les écrans larges
        } else {
            return 3; // Afficher 1 carte sur les écrans étroits
        }
    }

    // var containerHeight = $('.h-test').height();
    $('.card-w').css('height', '40vh');

    var containerHeight = $('.card-w').height();
    $('.chevron-h').css('height', containerHeight + 'px');
});


// $(document).ready(function() {
//     $('.slider-2').slick({
//         slidesToShow: 3,
//         slidesToScroll: 2,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         infinite: true,
//         prevArrow: false,
//         nextArrow: false,
//         onInit: function() {
//             // Récupérer toutes les divs .card dans le carrousel
//             var cards_w = $('.slider-2 .card-w');
            
//             // Redimensionner les divs .card
//             cards_w.css('width', '40%');
            
//             // Récupérer toutes les divs .chevron dans le carrousel
//             var chevrons = $('.slider-2 .chevron-w');
//             // Redimensionner les divs .chevron
//             chevrons.css('width', '10%');
        
//         }
//     });
//     var containerHeight = $('.slider-2').height();
//     $('.chevron-h').css('line-height', containerHeight + 'px');

// });
  