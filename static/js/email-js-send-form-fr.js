window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const spinner = document.getElementById("spinner");
      const submitText = document.getElementById("submit-text");

      // Show the spinner and clear submit text
      spinner.style.display = "inline-block";
      submitText.style.display = "none";

      // these IDs from the previous steps
      emailjs.sendForm("service_ohi1h5h", "template_zp3jexa", this).then(
        () => {
          console.log("SUCCESS!");
          showModal("Votre message a été envoyé avec succès!", "Succès");

          // Hide the spinner
          spinner.style.display = "none";
          submitText.style.display = "inline";
        },
        (error) => {
          console.log("FAILED...", error);
          showModal(
            "Une erreur s'est produite lors de l'envoi de votre message. " +
              "Veuillez essayer d'envoyer votre message directement à info@suter.vet",
            "Je suis désolé..."
          );

          // Hide the spinner
          spinner.style.display = "none";
          submitText.style.display = "inline";
        }
      );
    });

  function showModal(message, title) {
    const modalTitle = document.getElementById("modal-title");
    const responseMessage = document.getElementById("responseMessage");

    modalTitle.textContent = title;
    responseMessage.textContent = message;

    const responseModal = new bootstrap.Modal(
      document.getElementById("modal-test")
    );
    responseModal.show();
  }
};
