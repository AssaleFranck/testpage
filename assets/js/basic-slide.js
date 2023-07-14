
$(document).ready(function(){
    var slider = $('.slider-basic');
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
            return 5; // Afficher 3 cartes sur les écrans larges
        } else {
            return 3; // Afficher 1 carte sur les écrans étroits
        }
    }
});