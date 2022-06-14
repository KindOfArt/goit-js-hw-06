const formRefs = document.querySelector(".login-form");

formRefs.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formCurrent = event.currentTarget;
  const formElements = formCurrent.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("All areas must be filled");
    formCurrent.reset();
  } else if (password.includes(" ")) {
    alert("There is forbidden the space simbol in the password field");
    formCurrent.reset();
  } else {
    const formData = {
      email,
      password,
    };

    formCurrent.reset();
    console.log(formData);
  }
}
