const button = document.querySelector(".credits-button");
const credits = document.querySelector(".credits");

button.addEventListener("click", function () {
    credits.classList.toggle("credits--visible");

    if (credits.classList.contains("credits--visible")) {
        button.textContent = "Hide credits";
    } else {
        button.textContent = "Show credits";
    }
});