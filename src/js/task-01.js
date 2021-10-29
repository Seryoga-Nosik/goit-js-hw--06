/*
* Напиши скрипт который:

* 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
* 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

* В результате, в консоли будут выведены такие сообщения.

    * Number of categories: 3

    * Category: Animals
    * Elements: 4

    * Category: Products
    * Elements: 3

    * Category: Technologies
    * Elements: 5
 */

const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(e =>
  console.log(
    `Category: ${e.firstElementChild.textContent}
    Elements: ${e.lastElementChild.children.length}`,
  ),
);
