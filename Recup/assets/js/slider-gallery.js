
$(document).ready(function(){
    var slider = $('.slider');
    var slidesToShow = getSlidesToShow();

    slider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        prevArrow: '<i class="bi bi-chevron-left text-shadow"></i>',
        nextArrow: '<i class="bi bi-chevron-right text-shadow"></i>',
        // nextArrow: '<a href="#" class="slick-next chevron"><i class="bi bi-chevron-right text-shadow"></i></a>',
        // prevArrow: '<a href="#" class="slick-prev chevron"><i class="bi bi-chevron-left text-shadow"></i></a>'
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
            return 5; // Afficher 5 cartes sur les écrans larges
        } else {
            return 2; // Afficher 2 carte sur les écrans étroits
        }
    }
});