$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // 100 est le nombre de pixels à partir duquel la barre de navigation se rétrécit
            $('.nav-bg').addClass('nav-bg-scroll');
            $('.navbar-height').addClass('navbar-height-scroll');
            $('.img-size').addClass('img-size-scroll');
            $('.dropdown-menu').addClass('dropdown-menu-bg');
            // $('.nav-link').addClass('nav-link-scroll');
        } else {
            $('.nav-bg').removeClass('nav-bg-scroll');
            $('.navbar-height').removeClass('navbar-height-scroll');
            $('.img-size').removeClass('img-size-scroll');
            $('.dropdown-menu').removeClass('dropdown-menu-bg');
            // $('.nav-link').removeClass('nav-link-scroll');
        }
    });
});





// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 100) { // 100 est le nombre de pixels à partir duquel la barre de navigation se rétrécit
//             $('.nav-bg').addClass('nav-bg-scroll');
//             $('.navbar-height').addClass('navbar-height-scroll');
//             $('.img-size').addClass('img-size-scroll');
//             $('.dropdown-menu').addClass('dropdown-menu-bg');
//             // $('.nav-link').addClass('nav-link-scroll');
//         } else {
//             $('.nav-bg').removeClass('nav-bg-scroll');
//             $('.navbar-height').removeClass('navbar-height-scroll');
//             $('.img-size').removeClass('img-size-scroll');
//             $('.dropdown-menu').removeClass('dropdown-menu-bg');
//             // $('.nav-link').removeClass('nav-link-scroll');
//         }
//     });
// });