document.addEventListener("DOMContentLoaded", function () {
    function validateform(event) {
        event.preventDefault();  // Prevent form submission

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const phoneError = document.getElementById("phone-error");
        const messageError = document.getElementById("message-error");

        let isValid = true;

        if (name.value.trim() === "") {
            nameError.classList.remove("hidden");
            isValid = false;
        } else {
            nameError.classList.add("hidden");
        }

        if (email.value.trim() === "") {
            emailError.classList.remove("hidden");
            isValid = false;                        
        } else {
            emailError.classList.add("hidden");
        }

        if (phone.value.trim() === "") {
            phoneError.classList.remove("hidden");
            isValid = false;
        } else {
            phoneError.classList.add("hidden");
        }

        if (message.value.trim() === "") {
            messageError.classList.remove("hidden");
            isValid = false;
        } else {
            messageError.classList.add("hidden");
        }

        if (isValid) {
            sendEmail();
        }
        
        return isValid;
    }

    function sendEmail() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "shopkwetuke@gmail.com",
            Password: "63E5ED89DD83B657B1F699968F4EBB7CC6CA",
            To: 'shopkwetuke@gmail.com',
            From: "shopkwetu@gmail.com",
            Subject: "New Contact Form Enquiry",
            Body: "Name: " + document.getElementById("name").value + 
                  "<br>Email: " + document.getElementById("email").value + 
                  "<br>Phone: " + document.getElementById("phone").value + 
                  "<br>Message: " + document.getElementById("message").value
        }).then(
            message => alert(message)
        );
    }

    
    const form = document.querySelector("form");
    form.addEventListener("submit", validateform);
});
