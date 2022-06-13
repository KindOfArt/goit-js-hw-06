const refs = {
  counter: document.querySelector("#value"),
  btnActionIncrement: document.querySelector("[data-action = increment]"),
  btnActionDecrement: document.querySelector("[data-action = decrement]"),
};

refs.btnActionIncrement.addEventListener("click", onBtnIncrementClick);
refs.btnActionDecrement.addEventListener("click", onBtnDecrementClick);

let counterValue = 0;

function onBtnIncrementClick() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}
function onBtnDecrementClick() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
