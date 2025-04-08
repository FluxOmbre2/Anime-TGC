document.getElementById("invoke-btn").addEventListener("click", () => {
    const container = document.querySelector(".banner-container");
    container.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "../resultat.html"; // met bien resultat.html à la racine
    }, 500); // 0.5s = durée de l’animation
});
