let inputFields = document.querySelectorAll('form > * input');// console.log(inputFields);
let returnMessage = document.querySelectorAll('span');
let eventButton = document.querySelector('form > button');

eventButton.addEventListener('click', event => {
    event.preventDefault();
    // console.log("button clicked");
    validateInputs();
});

const isValidUserName = userName => {
    let userNameRegex = /^[a-z-A-Z-0-9_æøåÆØÅ]{2,25}$/i;
    return userNameRegex.test(String(userName));
};

const isValidEmail = email => {
    const emailRegex = /^[a-z0-9](\.?[a-z0-9]){4,}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};

const isValidPassword = password => {
    let passwordRegex = /^[a-z-A-Z-0-9æøåÆØÅ]{8,30}$/i; //
    return passwordRegex.test(String(password));
};

export const validateInputs = () => {
    const userName = inputFields[0].value.trim();
    const email = inputFields[1].value.trim();
    const password = inputFields[2].value.trim();

    if (!isValidUserName(userName)) {
        returnMessage[0].innerText = 'Name is required';
        console.log('FAILED! Name required');
    }
    if (!isValidEmail(email)) {
        returnMessage[1].inninnerTexterHTML = 'Email is not correct';
        console.log('FAILED! Email required '); // return this message
    }
    if (!isValidPassword(password)) {
        returnMessage[2].innerText = 'Password need at least 8 characters';
        console.log('FAILED! Password required ');
    }

    /* This is just to console if all input-fields are valid */
    if (isValidUserName(userName) && isValidEmail(email) && isValidPassword(password)) {
        console.log('SUCCESS! All input fields are validated');
    }
};