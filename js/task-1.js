/*
З використанням властивостей і методів 
DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість 
категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories 
знайде й виведе в консоль текст заголовка елемента (тегу <h2>) 
і кількість елементів у категорії (усіх <li>, вкладених у нього).

*/

const categorie = document.getElementById('categories');

// Log All number of categories
const numberOfCategories = categorie.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

// Log Each categories title and number of elements
const categorieItems = [...categorie.children];
categorieItems.map(item => {
  const title = item.firstElementChild.textContent;
  const elementsNumber =
    item.firstElementChild.nextElementSibling.children.length;
  console.log(`Categorie: ${title}`);
  console.log(`Elements: ${elementsNumber}`);
});
