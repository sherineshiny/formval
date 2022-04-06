const firstnameEl = document.querySelector('#firstname');
const lastnameEl = document.querySelector('#lastname');
const genderEl = document.querySelector('#gender');
const mobilenoEl = document.querySelector('#mobileno');
const doornoEl = document.querySelector('#doorno');
const landmarkEl = document.querySelector('#landmark');
const addressEl = document.querySelector('#address');
const emailEl = document.querySelector('#email');
const aadharnoEl = document.querySelector('#aadharno');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const firstname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const firstname = firstnameEl.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameEl, 'firstname cannot be blank.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstnameEl, `firstname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};
const lastname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const lastname = lastnameEl.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameEl, 'lastname cannot be blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `lastname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};
const address = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const address = addressEl.value.trim();

    if (!isRequired(address)) {
        showError(addressEl, 'address cannot be blank.');
    } else if (!isBetween(address.length, min, max)) {
        showError(address, `address must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(addressEl);
        valid = true;
    }
    return valid;
};
const aadharno = () => {

    let valid = false;

    const max = 12;

    const aadharno = lastnameEl.value.trim();

    if (!isRequired(aadharno)) {
        showError(aadharnoEl, 'aadharno cannot be blank.');
    } else if (!isBetween(aadharno.length, min, max)) {
        showError(lastnameEl, `aadharno must be ${max} characters.`)
    } else {
        showSuccess(aadharnoEl);
        valid = true;
    }
    return valid;
};
const doorno = () => {

    let valid = false;

    const max = 3;

    const doorno = doornoEl.value.trim();

    if (!isRequired(doorno)) {
        showError(doornoEl, 'doorno cannot be blank.');
    } else if (!isBetween(doorno.length, min, max)) {
        showError(doornoEl, `doorno must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};
const landmark = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const landmark = landmarkEl.value.trim();

    if (!isRequired(landmark)) {
        showError(landmarkEl, 'landmark cannot be blank.');
    } else if (!isBetween(landmark.length, min, max)) {
        showError(landmarkEl, `landmark must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(landmarkEl);
        valid = true;
    }
    return valid;
};
const mobileno = () => {

    let valid = false;

    const max = 10;

    const mobileno = mobilenoEl.value.trim();

    if (!isRequired(mobileno)) {
        showError(mobilenoEl, 'mobileno cannot be blank.');
    } else if (!isBetween(mobileno.length, min, max)) {
        showError(mobilenoEl, `mobileno must be ${max} characters.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};
const gender = () => {

    let valid = false;
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false; 
    }
};    
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));