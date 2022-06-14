// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formRefs = document.querySelector(".login-form");

formRefs.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formCurrent = event.currentTarget;
  const formElements = formCurrent.elements;

  if (
    formElements.email.value.length > 0 &&
    formElements.password.value.length > 0
  ) {
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
      email,
      password,
    };

    console.log(formData);

    formCurrent.reset();
  } else {
    alert("Value of email and password can not be empty!");
  }
}
