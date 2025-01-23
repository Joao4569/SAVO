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
      emailjs.sendForm("service_l6iw71x", "template_q5a5ja8", this).then(
        () => {
          console.log("Invio riuscito!");
          showModal("Invio riuscito!", "Invio riuscito!");

          // Hide the spinner
          spinner.style.display = "none";
          submitText.style.display = "inline";
        },
        (error) => {
          console.log("Invio non riuscito...", error);
          showModal(
            "Errore di invio. " +
              "per favore invia il tuo messaggio direttamente a  info@suter.vet",
            "ooops qualcosa non ha funzionato..."
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
