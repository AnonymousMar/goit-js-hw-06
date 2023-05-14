let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action=decrement]'); 
const btnIncrement = document.querySelector('button[data-action=increment]'); 
let valueEl = document.querySelector('#value');

const decrementClick = () => {
    counterValue -= 1;
    valueEl.textContent = `${counterValue}`;
};
const incrementClick = () => {
    counterValue += 1;
    valueEl.textContent = `${counterValue}`;
};
btnDecrement.addEventListener('click', decrementClick);
btnIncrement.addEventListener('click', incrementClick);