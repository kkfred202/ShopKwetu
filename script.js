document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", function (event) {
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

        // Custom validation
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

       
        if (isValid && form.checkValidity()) { 
            sendEmail(); 
        }
    });

    function sendEmail() {
        submitBtn.disabled = true;

        let parms = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_3xd7irq", "template_oenrqhe", parms)
            .then(
                function(response) {
                    console.log("Email sent successfully:", response);
                    alert("Email sent successfully");

                    
                    form.reset();
                },
                function(error) {
                    console.error("Failed to send email:", error);
                    alert("Failed to send email: " + error);
                }
            )
            .finally(() => {
                submitBtn.disabled = false;
            });
    }
});
