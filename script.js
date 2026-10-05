const dateInput = document.getElementById("birthday-date");
const startButton = document.getElementById("start-button");

const landingScene = document.getElementById("landing-scene");
const silhouette = document.getElementById("envelope-silhouette");
const photoScene = document.getElementById("photo-scene");
const flash = document.getElementById("flash");

const birthday = "2008-10-05";

let teleportInterval;

function startTeleport() {
    teleportInterval = setInterval(() => {
        const x = Math.random() * 360 - 180;
        const y = Math.random() * 360 - 150;

        silhouette.style.transform =
            `translate(${x}px, ${y}px)`;
    }, 20);
}

function stopTeleport() {
    clearInterval(teleportInterval);
    silhouette.style.transform = "translate(0, 0)";
}

/* =========================
   START ANIMATION
   ========================= */

startButton.addEventListener("click", () => {

    if (dateInput.value !== birthday) {
        console.log("Wrong date");
        return;
    }

    startButton.disabled = true;


    // 1. Open envelope
    landingScene.classList.add("opening");


    // 2. Show only silhouette
    setTimeout(() => {
        landingScene.classList.remove("opening");

        landingScene.classList.add(
            "silhouette",
            "dark"
        );

        startTeleport();
    }, 1400);


    // 3. Start white flash
    setTimeout(() => {
        flash.classList.add("active");
        landingScene.classList.add("leaving");
    }, 3000);


    // 4. Reveal photos
    setTimeout(() => {
        photoScene.classList.add("active");
    }, 3500);


    // 5. Remove landing scene
    setTimeout(() => {
        landingScene.style.display = "none";
    }, 4300);
});