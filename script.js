document.addEventListener("DOMContentLoaded", function () {
    function validateform () {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        const nameerror = document.getElementById("name-error");
        const emailerror = document.getElementById("email-error");
        const phoneerror = document.getElementById("phone-error");
        const messageerror = document.getElementById("message-error");

        let isValid = true ;
        if (name.value.trim() ==="") {
            name-error.classList.remove("hidden");
            isValid=false;
        }
        else {
            name-error.classList.add("hidden");
        }

        if (email.value.trim() === "") {
            email-error.classList.remove("hidden");
            isValid=false;                        
        }
        else {
            email-error.classList.add("hidden");
        
        }
        if (phone.value.trim() === "") {
            email-error.classList.remove("hidden");
            isValid = false;
            
        }
        else {
            email-error.classList.add("hidden");
        }

        if(message.value.trim() ==="") {
            message-error.classList.remove("hidden");
            isValid = false;
        }
        else {
            message-error.classList.add("hidden");
        }

        return isValid;
        
    }
    




  });
