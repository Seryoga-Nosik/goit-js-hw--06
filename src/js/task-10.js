/* 
* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

    * азмеры самого первого <div> - 30px на 30px.
    * Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
    * Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

* Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */

const refs = {
  input: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-create]'),
  clearBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
const { input, createBtn, clearBtn, boxes } = refs;

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);

let initialSize = 30;
input.value = 0;

function createBoxes() {
  let inputValue = input.value;

  let markup = '';

  for (let i = 0; i < inputValue; i += 1) {
    markup += `<div style="width: ${initialSize}px; height: ${initialSize}px; background-color: ${getRandomHexColor()};">
    </div>`;
    initialSize += 10;
  }

  boxes.insertAdjacentHTML('beforeend', markup);

  input.value = 0;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  initialSize = 30;
}

function getRandomHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
