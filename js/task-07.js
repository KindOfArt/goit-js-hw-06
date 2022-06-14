const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputSwap);

function onInputSwap(event) {
  const inputValue = event.currentTarget.value;
  refs.span.style.fontSize = `${inputValue}px`;
}
