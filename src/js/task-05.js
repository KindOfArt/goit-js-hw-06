const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  const { output } = refs;
  let currentTargetValue = event.currentTarget.value;

  currentTargetValue !== ""
    ? (output.textContent = currentTargetValue)
    : (output.textContent = "Anonymus");
});
