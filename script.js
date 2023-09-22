const form = document.getElementById('newsletterForm');
const inputEmail = document.getElementById('inputEmail');
const errorMessage = document.getElementById('errorMsg');
const mainPanel = document.getElementById('main');
const endPanel = document.getElementById('subcribed');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // Your custom validation logic here
    const email = inputEmail.value;
    if (!isValidEmail(email)) {
         // Display the error message
        errorMessage.classList.remove('d-none');
        inputEmail.style.backgroundColor = "hsla(4, 100%, 67%, 0.212)";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
        inputEmail.style.color = "hsl(4, 100%, 67%)";
    } else {
        document.getElementById('email').innerHTML = email;
        mainPanel.classList.add('d-none');
        endPanel.classList.remove('d-none');
    }
});

function backToMain() {
    mainPanel.classList.remove('d-none');
    endPanel.classList.add('d-none');
    inputEmail.value = "";
}

function isValidEmail(email) {
    // Regular expression pattern for a valid email address
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Test the email against the pattern
    return emailPattern.test(email);
}
