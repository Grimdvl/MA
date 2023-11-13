const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit-button';
const RESULT_PAGE_PATH = './success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
const errorsContainer = document.querySelectorAll('.errors-container');

const errors = {
    email: { text: 'Invalid email format', hasError: false },
    password: { text: 'Password length should be between 8 and 12 characters', hasError: false },
    checkbox: { text: 'Checkbox is not checked', hasError: false },
};

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(error) {
    errorsContainer.forEach((container, i) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');

        const errorKey = Object.keys(error)[i];
        const item = error[errorKey];

        if (item.hasError) {
            errorElement.textContent = item.text;
            container.appendChild(errorElement);
        }
    });
}

function deleteErrors(classes) {
    classes.forEach((item) => {
        const error = item.querySelector('.error');
        if (error) {
            error.remove();
        }
    });
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    const emailInput = document.getElementById(email).value;
    return /\S+@\S+\.\S+/.test(emailInput);
}

function passwordLength(password) {
    const passwordInput = document.getElementById(password).value;
    return passwordInput.length >= 8 && passwordInput.length <= 12;
}

function validateForm() {
    deleteErrors(errorsContainer);
    Object.keys(errors).forEach((key) => {
        errors[key].hasError = false;
    });

    if (!isEmail(EMAIL_INPUT_ID)) {
        errors.email.hasError = true;
    }
    if (!passwordLength(PASSWORD_INPUT_ID)) {
        errors.password.hasError = true;
    }
    if (!getValueById(NOT_A_ROBOT_CHECKBOX_ID)) {
        errors.checkbox.hasError = true;
    }

    console.log(errors);
    setErrors(errors);

    if (!Object.values(errors).some((error) => error.hasError)) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
