
const formRegister = document.querySelector('#formRegister');
const registerUserName = document.querySelector('#registerUserName');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');

const formLogin = document.querySelector('#formLogin');
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');

const submitButton = document.querySelector('#submitBtn');


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("you've submitted");


    const registerUserName = this.value.trim();
    const email = this.value.trim();


    console.log("Form data:", username, email);
    /** @todo Validate form data here. **/


    const messageData = {
        username,
        email,
    }

    console.log(messageData);

    sessionStorage.clear();
    form.reset();
    console.log("Form submitted");

    //form.submit(); // comment out to prevent form from

});

/** Get form-data on change, add to sessionStorage **/



