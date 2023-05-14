const validInput = document.querySelector('#validation-input');
const onBlur = (event) => {
    if (event.currentTarget.value.length !== Number(validInput.dataset.length)) {
        validInput.classList.add('invalid');
        validInput.classList.remove('valid');
    }
    else {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    }
};
validInput.addEventListener('blur', onBlur);