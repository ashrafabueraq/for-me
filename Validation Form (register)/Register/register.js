const form = document.getElementById('form');
let username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmm = document.getElementById('confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});



function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
     const confirmValue = confirmm.value.trim();


    if (usernameValue === '') {

        //show error 
        //add error class 
        setErrorFor(username, 'username cannot be empty');

    }else if(!isUser(usernameValue)) {
        setErrorFor(username, 'must be contain letters')

    }

    else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {

        //show error 
        //add error class 
        setErrorFor(email, 'Email cannot be empty');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email  not valid ');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be empty')
    } else {
        setSuccessFor(password)
    }

    if(confirmValue === '') {
        setErrorFor(confirmm, 'confirm password cannot be empty')

    }else if (confirmValue !== passwordValue){
        setErrorFor(confirmm,'no match')

    }
    else{
        setSuccessFor(confirmm)
    }






}

function setErrorFor(input, message) {

    const control = input.parentElement;
    const small = control.querySelector('small');

    //add error message inside small tag
    small.innerHTML = message;

    //add error class 
    control.className = 'control error';
}


function setSuccessFor(input) {
    const control = input.parentElement;

    control.className = 'control success'
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function isUser(username){
      return /^[A-Za-z]/.test(username);
}

