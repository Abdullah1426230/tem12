let side = document.querySelector("aside"),
    sideOpen = document.querySelector("#open"),
    closeSide = document.querySelector("#close"),
    sideOverlay = document.querySelector(".sideOverlay");

sideOpen.addEventListener("click", () => {
    side.style.left = "0"
    sideOverlay.style.display = "block"
})
closeSide.addEventListener("click", () => {
    side.style.left = "-250px"
    sideOverlay.style.display = "none"
})