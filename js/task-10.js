function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  CREATE_BTN: document.querySelector("[data-create]"),
  DESTROY_BTN: document.querySelector("[data-destroy]"),
  INPUT: document.querySelector("#controls > input"),
  BOXES: document.querySelector("#boxes"),
};

refs.CREATE_BTN.addEventListener("click", onCreateBtnClick);
refs.DESTROY_BTN.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  if (refs.INPUT.value > 0) {
    refs.BOXES.innerHTML = "";
    return createBoxes(refs.INPUT.value);
  }
}

function onDestroyBtnClick() {
  refs.BOXES.innerHTML = "";
}

function createBoxes(amount) {
  const boxesConteiner = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${(width += 10)}px`;
    box.style.height = `${(height += 10)}px`;

    boxesConteiner.push(box);
  }

  refs.BOXES.append(...boxesConteiner);
}
