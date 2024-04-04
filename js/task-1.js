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
