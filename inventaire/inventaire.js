// Nombre de cartes à afficher à la fois
const cardsPerLoad = 10;
let currentIndex = 0;
let cards = [];  // Liste des cartes à afficher

// Fonction pour charger les cartes depuis un fichier JSON
async function loadCards() {
    const response = await fetch("data/inventaires.json");  // Remplace ce chemin par ton fichier JSON
    cards = await response.json();
    displayCards(currentIndex, cardsPerLoad);  // Affiche les premières cartes
}

// Fonction pour afficher les cartes dans le conteneur
function displayCards(startIndex, count) {
    const container = document.getElementById("inventory-container");
    container.innerHTML = "";  // Efface les cartes actuelles

    const cardsToShow = cards.slice(startIndex, startIndex + count);
    cardsToShow.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // Contenu de la carte
        cardDiv.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <div class="card-title">${card.name}</div>
            <div class="card-description">${card.description}</div>
        `;
        container.appendChild(cardDiv);
    });
}

// Fonction pour gérer les flèches de navigation
document.getElementById("prev-arrow").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= cardsPerLoad;
        displayCards(currentIndex, cardsPerLoad);
    }
});

document.getElementById("next-arrow").addEventListener("click", () => {
    if (currentIndex + cardsPerLoad < cards.length) {
        currentIndex += cardsPerLoad;
        displayCards(currentIndex, cardsPerLoad);
    }
});

// Fonction pour gérer la recherche
document.getElementById("search-bar").addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchText));
    displayCards(0, filteredCards.length);  // Afficher uniquement les cartes correspondantes
});

// Charger les cartes quand le script est prêt
loadCards();


