window.addEventListener("load", function () {
    // 1. Créer et ajouter la vidéo d'intro
    const body = document.body;

    const introAnimation = document.createElement("div");
    introAnimation.id = "intro-animation";

    const introVideo = document.createElement("video");
    introVideo.id = "intro-video";
    introVideo.autoplay = true;
    introVideo.muted = true;
    introVideo.loop = true;

    const videoSource = document.createElement("source");
    videoSource.src = "assets/menuinvoc.mp4";  // Remplace par le chemin de ta vidéo
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
    welcomeText.textContent = "Choisir la bannière";

    const startButton = document.createElement("button");
    startButton.textContent = "Choisir";

    welcomeMessage.appendChild(welcomeText);
    welcomeMessage.appendChild(startButton);

    body.appendChild(welcomeMessage);

    // 4. Créer les boutons de navigation à gauche et à droite
    const leftArrow = document.createElement("button");
    leftArrow.classList.add("arrow", "left");
    leftArrow.innerHTML = "&#8592;";  // Flèche gauche

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("arrow", "right");
    rightArrow.innerHTML = "&#8594;";  // Flèche droite

    body.appendChild(leftArrow);
    body.appendChild(rightArrow);

    // 5. Animation de la vidéo
    introVideo.style.opacity = 1;

    // Fonction pour lancer la barre de chargement
    setTimeout(() => {
        loadingBarContainer.style.display = "block";
        loadingBar.style.width = "100%";
    }, 2000);  // 2 secondes avant que la barre commence à se remplir

    // Fonction pour afficher le message de bienvenue après 5 secondes
    setTimeout(() => {
        loadingBarContainer.style.display = "none";
        welcomeMessage.style.display = "block";
    }, 5000);  // 5 secondes avant d'afficher le message de bienvenue

    // Rediriger lorsque le bouton "Commencer" est cliqué
    startButton.addEventListener("click", () => {
        window.location.href = "invocations.html";  // Page de redirection
    });

    // Fonction pour la flèche gauche
    leftArrow.addEventListener("click", () => {
        window.location.href = "previousPage.html";  // Remplace par la page précédente
    });

    // Fonction pour la flèche droite
    rightArrow.addEventListener("click", () => {
        window.location.href = "nextPage.html";  // Remplace par la page suivante
    });
});
window.addEventListener("load", function () {
    // Création du bouton "Invoquer"
    const invokeButton = document.createElement("button");
    invokeButton.textContent = "Invoquer";
    invokeButton.id = "invoke-button";

    // Ajout au body
    document.body.appendChild(invokeButton);

    // Redirection vers la page des bannières
    invokeButton.addEventListener("click", () => {
        window.location.href = "bannieres.html"; // remplace si besoin
    });
});
startButton.addEventListener("click", () => {
    welcomeMessage.classList.add("fade-out"); // Ajoute l'animation

    setTimeout(() => {
        window.location.href = "banniere.html"; // Redirige après l'animation
    }, 500); // Le temps doit matcher la durée de l'animation
});
