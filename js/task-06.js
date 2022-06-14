const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputDataLength = +inputRef.getAttribute("data-length");
  const inputCurrent = event.currentTarget;
  const inputCurrentLength = inputCurrent.value.length;

  if (
    inputCurrentLength < inputDataLength ||
    inputCurrentLength > inputDataLength
  ) {
    inputCurrent.classList.remove("valid");
    return inputCurrent.classList.add("invalid");
  }
  if (inputCurrentLength === inputDataLength) {
    inputCurrent.classList.remove("invalid");
    return inputCurrent.classList.add("valid");
  }
}
