// Variables globales
let cards = [];
let currentIndex = 0;
const cardsPerLoad = 20;  // Nombre de cartes à charger à chaque fois

// Fonction pour charger les cartes depuis le fichier JSON
async function loadCards() {
    const response = await fetch("assets/cards.json");  // Charger le JSON des cartes
    cards = await response.json();  // Convertir le JSON en un tableau JavaScript
    displayCards(currentIndex, cardsPerLoad);  // Afficher les premières cartes
}

// Fonction pour afficher les cartes
function displayCards(start, count) {
    const inventoryContainer = document.getElementById("inventory-container");

    // Afficher les cartes spécifiées
    for (let i = start; i < start + count && i < cards.length; i++) {
        const card = cards[i];

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const cardImage = document.createElement("img");
        cardImage.src = card.image;
        cardImage.alt = card.name;

        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = card.name;

        const cardDescription = document.createElement("div");
        cardDescription.classList.add("card-description");
        cardDescription.textContent = card.description;

        const cardPv = document.createElement("div");
        cardPv.classList.add("card-pv");
        cardPv.textContent = `PV: ${card.pv}`;

        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardPv);

        inventoryContainer.appendChild(cardElement);
    }

    currentIndex += count;  // Mettre à jour l'index pour les prochaines cartes à afficher
}

// Fonction pour ajouter un infinite scroll
window.addEventListener("scroll", () => {
    const bottom = document.documentElement.scrollHeight === window.innerHeight + window.scrollY;

    if (bottom && currentIndex < cards.length) {
        displayCards(currentIndex, cardsPerLoad);  // Charger et afficher plus de cartes
    }
});

// Charger les cartes initiales au chargement de la page
window.onload = loadCards;
