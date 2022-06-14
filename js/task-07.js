const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", () => {
  const { input, span } = refs;
  span.style.fontSize = `${input.value}px`;
});
