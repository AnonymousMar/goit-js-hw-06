const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', (event) => {
    const inputSize = input.value;
    span.style.fontSize = inputSize + 'px';
});