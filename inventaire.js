async function loadCards() {
    // Si tu as déjà un fichier existant ailleurs
    const response = await fetch("data/inventaires.json");  // Remplace ce chemin par celui de tes fichiers JSON existants
    cards = await response.json();
    displayCards(currentIndex, cardsPerLoad);
}
