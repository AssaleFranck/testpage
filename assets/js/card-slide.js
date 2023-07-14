$(document).ready(function(){
    var slider = $('.slider');
    var slidesToShow = getSlidesToShow();

    slider.slick({
        slidesToShow: 4,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        prevArrow: '<a href="#" class="slick-prev chevron"><i class="bi bi-chevron-left text-shadow"></i></a>',
        // prevArrow: '<button type="button" class="slick-prev">Précédent</button>',
        nextArrow: '<a href="#" class="slick-next chevron"><i class="bi bi-chevron-right text-shadow"></i></a>'
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
            return 4; // Afficher 3 cartes sur les écrans larges
        } else {
            return 1; // Afficher 1 carte sur les écrans étroits
        }
    }
});
