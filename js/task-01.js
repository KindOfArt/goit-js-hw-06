const refs = {
  categories: document.querySelector("#categories"),
  categoriesItems: document.querySelectorAll(".item"),
};

const categoriesCount = refs.categories.children.length;
console.log("Number of categories: ", categoriesCount);
console.log("");

refs.categoriesItems.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryElementsCount = item.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log("Elements: ", categoryElementsCount);
  console.log("");
});
