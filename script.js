document.addEventListener("DOMContentLoaded", function () {
    function validateform(event) {
        event.preventDefault(); 

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
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "shopkwetuke@gmail.com", 
            Password: "8EF858AFB661F681F5788864CF1882E98FA9",
            To: 'shopkwetuke@gmail.com',
            From: "shopkwetuke@gmail.com",
            Subject: "New Contact Form Enquiry",
            Body: `Name: ${name} <br>Email: ${email} <br>Phone: ${phone} <br>Message: ${message}`
        }).then(
            message => alert("Email sent successfully: ")
        ).catch(
            error => alert("Failed to send email: " + error)
        );
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", validateform);
});
