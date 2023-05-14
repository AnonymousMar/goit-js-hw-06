const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

const valueInput = document.querySelector('input');
const boxesCollection = document.querySelector('#boxes');

buttonCreate.addEventListener('click', create);
buttonDestroy.addEventListener('click', destroy);
function createBoxes(a) {
  const primaryBoxSize = 30;
  let divCollection = [];
  let div = '';
  for (let i = 0; i < a; i += 1) {
    let size = primaryBoxSize + i * 10;
    div = document.createElement('div');
    div.textContent = 'box';
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    divCollection.push(div);
  }
  return divCollection;
}
function create() {
  const amount = +valueInput.value;
  let boxes = createBoxes(amount);
  boxesCollection.append(...boxes);
}
function destroy() {
  boxesCollection.innerHTML = '';
  valueInput.value = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
