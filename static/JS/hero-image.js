document.addEventListener("DOMContentLoaded", function () {
  function updateHeroImage() {
    const heroImageDiv = document.getElementById("hero-image");

    if (window.innerWidth >= 1024) {
      // Add classes to the div
      heroImageDiv.classList.add("col-12", "order-3", "py-5");

      // Check if the image already exists
      if (!heroImageDiv.querySelector("img")) {
        // Create the image element
        const imgElement = document.createElement("img");
        imgElement.classList.add("img-fluid", "visibility-toggle");
        imgElement.src =
          "./assets/images/cropped_hero_image_anna-dudkova-urs_y9NwFcc-unsplash.jpg";
        imgElement.alt = "Hero of a brown and white dog with a ball.";

        // Append the image to the div
        heroImageDiv.appendChild(imgElement);
      }
    } else {
      // Remove classes from the div
      heroImageDiv.classList.remove("col-12", "order-3", "py-5");

      // Remove the image element if it exists
      const imgElement = heroImageDiv.querySelector("img");
      if (imgElement) {
        heroImageDiv.removeChild(imgElement);
      }
    }
  }

  // Initial check
  updateHeroImage();

  // Update on resize
  window.addEventListener("resize", updateHeroImage);
});
