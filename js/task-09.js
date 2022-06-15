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
  const color = getRandomHexColor();
  refs.BODY.style.backgroundColor = color;
  refs.OUTPUT_COLOR.textContent = color;
}
