$(document).ready(function() {
    const cardsWrapper = $(".cards-wrapper");
    const cardWidth = $(".card").outerWidth();
    const cardsContainer = $(".cards-container");
    const numCards = $(".card").length;
    const numVisibleCards = 3; // Nombre de cartes visibles sur une ligne
    const numTotalVisibleCards = 4; // Nombre total de cartes visibles dans le conteneur
  
    let currentScroll = 0;
  
    // Fonction pour mettre à jour la position du conteneur de cartes
    function updateScrollPosition() {
      cardsWrapper.css("transform", `translateX(-${currentScroll}px)`);
    }
  
    // Fonction pour déplacer vers la gauche
    $("#prevBtn").click(function() {
      if (currentScroll >= cardWidth) {
        currentScroll -= cardWidth * numVisibleCards;
      } else {
        currentScroll = 0;
      }
      updateScrollPosition();
    });
  
    // Fonction pour déplacer vers la droite
    $("#nextBtn").click(function() {
      if (currentScroll < cardWidth * (numCards - numTotalVisibleCards)) {
        currentScroll += cardWidth * numVisibleCards;
      }
      updateScrollPosition();
    });
  });
  