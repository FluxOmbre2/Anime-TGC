window.addEventListener("load", function () {
    // 1. Créer et ajouter la vidéo à l'écran
    const body = document.body;

    // Créer l'élément pour la vidéo d'intro
    const introAnimation = document.createElement("div");
    introAnimation.id = "intro-animation";

    const introVideo = document.createElement("video");
    introVideo.id = "intro-video";
    introVideo.autoplay = true;
    introVideo.muted = true;
    introVideo.loop = true;

    const videoSource = document.createElement("source");
    videoSource.src = "assets/background lancement.mp4";  // Remplace par le chemin de ta vidéo
    videoSource.type = "video/mp4";
    introVideo.appendChild(videoSource);

    introAnimation.appendChild(introVideo);
    body.appendChild(introAnimation);

    // 2. Créer la barre de chargement
    const loadingBarContainer = document.createElement("div");
    loadingBarContainer.id = "loading-bar-container";

    const loadingBar = document.createElement("div");
    loadingBar.id = "loading-bar";
    loadingBarContainer.appendChild(loadingBar);

    body.appendChild(loadingBarContainer);

    // 3. Créer le message de bienvenue et le bouton
    const welcomeMessage = document.createElement("div");
    welcomeMessage.id = "welcome-message";

    const welcomeText = document.createElement("h1");
    welcomeText.textContent = "Bienvenue !";

    const startButton = document.createElement("button");
    startButton.textContent = "Commencer";

    welcomeMessage.appendChild(welcomeText);
    welcomeMessage.appendChild(startButton);

    body.appendChild(welcomeMessage);

    // Animation de la vidéo
    introVideo.style.opacity = 1; // Vidéo visible immédiatement

    // Fonction pour lancer la barre de chargement
    setTimeout(() => {
        loadingBarContainer.style.display = "block"; // Afficher la barre de chargement
        loadingBar.style.width = "100%"; // Remplir la barre
    }, 2000);  // 2 secondes avant que la barre commence à se remplir

    // Fonction pour afficher le message de bienvenue après 5 secondes
    setTimeout(() => {
        loadingBarContainer.style.display = "none"; // Masquer la barre de chargement
        welcomeMessage.style.display = "block";  // Afficher le message et le bouton
    }, 5000);  // 5 secondes avant d'afficher le message de bienvenue

    // Rediriger lorsque le bouton "Commencer" est cliqué
    startButton.addEventListener("click", () => {
        window.location.href = "invocations.html";  // Page de redirection
    });
});

startButton.addEventListener("click", () => {
    welcomeMessage.classList.add("fade-out"); // Ajoute l'animation

    setTimeout(() => {
        window.location.href = "banniere.html"; // Redirige après l'animation
    }, 500); // Le temps doit matcher la durée de l'animation
});

document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.getElementById("go-to-inventaire");

    if (leftArrow) {
        leftArrow.addEventListener("click", () => {
            // Redirige vers la page Inventaire
            window.location.href = "inventaire.html";
        });
    }
});


