/* 
* Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

* Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const changeColorBtn = document
  .querySelector('.change-color')
  .addEventListener('click', onBtnClick);
const colorName = document.querySelector('.color');

function onBtnClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
  // colorName.parentNode.style.color = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
