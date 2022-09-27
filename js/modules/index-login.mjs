const form = document.getElementById('form');
const email = document.getElementById('email');
const pw = document.getElementById('pw');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
};

const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};


const isValidPassword = pw => {

}


const isValidEmail = email => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


    if (emailValue === setSuccess(email)) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('hideTitle').style.display = 'none';
        document.getElementById('hideText').style.display = 'none';
        document.getElementById('hideForm').style.display = 'none';
    } /**/
};