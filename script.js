const contrastToggle = document.getElementById("toggle-contrast");

if (contrastToggle) {
  contrastToggle.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
}