document.addEventListener("click", function (event) {
  if (event.target.closest(".testing-two")) {
    const testingElement = event.target
      .closest(".testing-two")
      .querySelector(".testing");

    if (testingElement) {
      const iconElement = testingElement.querySelector("i");

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
  }
});
