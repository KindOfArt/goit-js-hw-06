const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputEvent);

function onInputEvent(event) {
  const { output } = refs;
  let inputCurrentValue = event.currentTarget.value;

  inputCurrentValue !== ""
    ? (output.textContent = inputCurrentValue)
    : (output.textContent = "Anonymus");
}
