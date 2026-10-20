const form = document.querySelector("#subscribe-form");
const emailInput = document.querySelector("#email-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  console.log("Форма отправлена");
  console.log(emailInput);
  console.log(emailInput.value); // выведет то что ввел пользователь
  form.reset();
});

const feedbackForm = document.querySelector("#feedback-form");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!feedbackForm.checkValidity()) {
    feedbackForm.reportValidity();
    return;
  }

  const formData = new FormData(feedbackForm);
  console.log("Имя:", formData.get("name"));
  console.log("Email:", formData.get("email"));
  console.log("Сообщение:", formData.get("message"));

  const formValues = Object.fromEntries(formData);
  console.log("Объект с данными:", formValues);

  feedbackForm.reset();
});

const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("input", function (event) {
  console.log("Текущее значение", event.target.value);
});

const aboutmeTextarea = document.querySelector("#aboutme");
const symbolCounter = document.querySelector("#symbol-counter");

aboutmeTextarea.addEventListener("input", function () {
  const symbolLength = aboutmeTextarea.value.length;
  symbolCounter.textContent = `${symbolLength}/100`;
});

const directionSelect = document.querySelector("#direction");

directionSelect.addEventListener("change", function () {
  console.log(directionSelect.value);
});

const agreeForm = document.querySelector("#agree-form");

agreeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!agreeForm.checkValidity()) {
    agreeForm.reportValidity();
    return;
  }
  console.log("Согласен(на) с правилами");
});

const finalForm = document.querySelector("#final-form");

finalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!finalForm.checkValidity()) {
    finalForm.reportValidity();
    return;
  }
  const fformData = new FormData(finalForm);
  const fformValues = Object.fromEntries(fformData);
  fformValues.createdOn = new Date();
  console.log(fformValues);
  finalForm.reset();
});
