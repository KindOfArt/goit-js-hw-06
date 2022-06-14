function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  BODY: document.body,
  CHANGE_COLOR_BTN: document.querySelector(".change-color"),
  OUTPUT_COLOR: document.querySelector(".color"),
};

refs.CHANGE_COLOR_BTN.addEventListener("click", onChengeColorBtn);

function onChengeColorBtn() {
  refs.BODY.style.backgroundColor = getRandomHexColor();
  refs.OUTPUT_COLOR.textContent = getRandomHexColor();
}
