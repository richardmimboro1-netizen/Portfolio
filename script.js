const contactForm = document.getElementById("contactForm");

const nomContact = document.getElementById("nomContact");
const emailContact = document.getElementById("emailContact");
const messageContact = document.getElementById("messageContact");

const messageForm = document.getElementById("messageForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    if (
        nomContact.value === "" ||
        emailContact.value === "" ||
        messageContact.value === ""
    ) {

        messageForm.textContent =
            "⚠️ Veuillez remplir tous les champs.";

        messageForm.style.color = "#dc2626";

        return;
    }


    messageForm.textContent =
        "✅ Merci " + nomContact.value +
        " ! Votre message a bien été préparé.";

    messageForm.style.color = "#16a34a";


    contactForm.reset();

});
