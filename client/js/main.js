function afterPageLoad() {
    document.querySelector("h1").textContent = "After page load!"
}

document.addEventListener("DOMContentLoaded", afterPageLoad);
