const submitButton = document.getElementById("form-btn");
const dismissButton = document.getElementById("dismiss-btn");
const successPopup = document.getElementById("success-popup");
const mainSection = document.querySelector("main");
const error = document.getElementById("error");
var emailInput = document.getElementById("email");

// When click submitButton, it checks to see if email is okay. If okay success popup shows, if not, error message shows


submitButton.addEventListener("click", submitForm);
dismissButton.addEventListener('click', dismissForm);

function validateEmail (emailInput) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailInput);
}

function submitForm() {
    // validate email
    
    // show popup
    if (validateEmail (emailInput.value)) {
    var popupInsert = document.getElementById("email-input");
    popupInsert.innerText=emailInput.value;
    successPopup.classList.toggle("hide");
    mainSection.classList.toggle("hide");
    error.classList.add("hide");
    emailInput.classList.remove("error")
    } else {
        error.classList.remove("hide");
        emailInput.classList.add("error")
    }
}

function dismissForm () {
    mainSection.classList.toggle("hide");
    successPopup.classList.toggle("hide");
    emailInput.value = "";
}