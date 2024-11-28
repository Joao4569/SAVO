document.addEventListener("click", function (event) {
  if (event.target.closest(".testing")) {
    const iconElement = event.target.closest(".testing").querySelector("i");

    if (iconElement) {
      if (iconElement.classList.contains("fa-circle-chevron-down")) {
        iconElement.classList.remove("fa-circle-chevron-down");
        iconElement.classList.add("fa-circle-chevron-up");
      } else if (iconElement.classList.contains("fa-circle-chevron-up")) {
        iconElement.classList.remove("fa-circle-chevron-up");
        iconElement.classList.add("fa-circle-chevron-down");
      }
    }
  }
});
