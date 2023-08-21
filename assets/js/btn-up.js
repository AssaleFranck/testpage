// Fonction pour exécuter du code en fonction de la largeur de l'écran
function applyCodeBasedOnScreenWidth() {
    var screenWidth = window.innerWidth;
  
    if (screenWidth < 768) {
        window.addEventListener('scroll', function() {
            var scrollTopBtn = document.getElementById('up-btn');
            if (window.scrollY > 10 * window.innerHeight / 100) {
              scrollTopBtn.classList.add('active');
            } else {
              scrollTopBtn.classList.remove('active');
            }
        });
    } else {
        window.addEventListener('scroll', function() {
            var scrollTopBtn = document.getElementById('up-btn');
            if (window.scrollY > 100 * window.innerHeight / 100) {
              scrollTopBtn.classList.add('active');
            } else {
              scrollTopBtn.classList.remove('active');
            }
        });
    }
  }
  
  // Exécutez la fonction initialement et lors du redimensionnement de l'écran
  applyCodeBasedOnScreenWidth();
  
  window.addEventListener('resize', applyCodeBasedOnScreenWidth);
  
  


// window.addEventListener('scroll', function() {
//     var scrollTopBtn = document.getElementById('up-btn');
//     if (window.scrollY > 100 * window.innerHeight / 100) {
//         scrollTopBtn.classList.add('active');
//     } else {
//         scrollTopBtn.classList.remove('active');
//     }
// });

// document.getElementById('scroll-top-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     var targetId = this.querySelector('a').getAttribute('href');
//     var targetElement = document.querySelector(targetId);
//     if (targetElement) {
//         targetElement.scrollIntoView({
//          behavior: 'smooth'
//         });
//     }
// });
  