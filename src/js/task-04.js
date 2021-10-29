/* 
* Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

* • Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
* • Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
* • Обновляй интерфейс новым значением переменной counterValue.
 */

const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};
const { counter, value, increment, decrement } = refs;

let counterValue = 0;

const onIncrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onDecrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrement.addEventListener('click', onDecrementClick);
increment.addEventListener('click', onIncrementClick);
