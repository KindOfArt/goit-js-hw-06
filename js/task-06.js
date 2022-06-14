const inputRef = document.querySelector("#validation-input");
const inputDataLength = +inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", () => {
  if (
    inputRef.value.length < inputDataLength ||
    inputRef.value.length > inputDataLength
  ) {
    inputRef.classList.remove("valid");
    return inputRef.classList.add("invalid");
  }
  if (inputRef.value.length === inputDataLength) {
    inputRef.classList.remove("invalid");
    return inputRef.classList.add("valid");
  }
});
