const nameError = document.getElementById('name-error')
const phoneError = document.getElementById('phone-error')
const emailError = document.getElementById('email-error')
const messageError = document.getElementById('message-error')
const submitError = document.getElementById('submit-error')

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    // ( /^[A-Za-z]*\s{1}[A-Za-z]*$/ )   
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }

    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone no. must be 11 digits';
        return false;
    }

    // (/^[0-9]{11}$|^[0-9]{13}$/)
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    let email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    //  (/^[A-Za-z]\._\-[0-9]*[@][A-za-z]*[\.][a-z]{2,4}$/)
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Enter a valid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validateMessage() {
    let message = document.getElementById('user-message').value;
    let required = 25;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + " " + 'more characters required';
        return false;
    }

    if (left < 0) {
        messageError.innerHTML = 'Message has exceeded maximum characters';
        return false;
    }

    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function validateform() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function () { submitError.style.display = 'none' }, 4000);
        return false;
    }
}