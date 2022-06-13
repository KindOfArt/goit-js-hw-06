const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredientsList: document.querySelector("#ingredients"),
};

const ingredient = ingredients.map((ingredientName) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredientName;

  return listItem;
});

refs.ingredientsList.append(...ingredient);
