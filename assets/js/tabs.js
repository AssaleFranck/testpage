function showCategory(category) {
    // Masquer toutes les catégories
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.style.display = 'none');
  
    // Afficher la catégorie sélectionnée
    const selectedCategory = document.getElementById(category);
    selectedCategory.style.display = 'flex';
  
    // Gérer la classe active pour les boutons d'onglet
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        if (btn.id === category) {
            btn.classList.add('active-tab');
        } else {
            btn.classList.remove('active-tab');
        }
    });

}