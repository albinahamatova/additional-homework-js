// ЗАДАНИЕ 1

const feedbackForm = document.querySelector("#feedback-form");
feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!feedbackForm.checkValidity()) {
    feedbackForm.reportValidity();
    return;
  }
  const formData = new FormData(feedbackForm);
  const ffValues = Object.fromEntries(formData);
  console.log(ffValues);
});

// ЗАДАНИЕ 2

const passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(passwordForm);
  const formValues = Object.fromEntries(formData);
  if (!passwordForm.checkValidity()) {
    passwordForm.reportValidity();
    return;
  }
  if (formValues.newPassword !== formValues.repeatPassword) {
    alert("Пароли не совпадают");
    return;
  }
  console.log("Успешная смена пароля");
});

// ЗАДАНИЕ 3

const userForm = document.querySelector("#user-form");
userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!userForm.checkValidity()) {
    userForm.reportValidity();
    return;
  }
  const formData = new FormData(userForm);
  const userFormValues = Object.fromEntries(formData);
  console.log(userFormValues);
});

// ЗАДАНИЕ 4

const registrationForm = document.querySelector("#registration-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!registrationForm.checkValidity()) {
    registrationForm.reportValidity();
    return;
  }
  const formData = new FormData(registrationForm);
  const formValues = Object.fromEntries(formData);

  if (formValues.password !== formValues.repeatPassword) {
    alert("Пароли не совпадают");
    return;
  }
  delete formValues.password;
  delete formValues.repeatPassword;
  formValues.createdOn = new Date();

  console.log(formValues);
});

// ЗАДАНИЕ 5

const requestModal = document.querySelector("#request-modal");
const requestOverlay = document.querySelector(".modal__overlay");
const btnOpenRequestModal = document.querySelector("#btn-open-request-modal");
const btnCloseRequestModal = document.querySelector("#btn-close-request-modal");
const requestForm = document.querySelector("#request-form");

btnOpenRequestModal.addEventListener("click", () => {
  requestModal.classList.add("modal__open");
});

requestOverlay.addEventListener("click", (event) => {
  requestModal.classList.remove("modal__open");
});

btnCloseRequestModal.addEventListener("click", () => {
  requestModal.classList.remove("modal__open");
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(requestForm);
  const formDataValues = Object.fromEntries(formData);
  console.log(formDataValues);

  requestModal.classList.remove("modal__open");
});

// ЗАДАНИЕ 6

const eventregModal = document.querySelector("#eventreg-modal");
const eventregOverlay = document.querySelector(".modal__overlay");
const btnOpenEventregModal = document.querySelector("#btn-open-eventreg-modal");
const btnCloseEventregModal = document.querySelector(
  "#btn-close-eventreg-modal",
);
const eventregForm = document.querySelector("#eventreg-form");

btnOpenEventregModal.addEventListener("click", () => {
  eventregModal.classList.add("modal__open");
});

eventregOverlay.addEventListener("click", (event) => {
  eventregModal.classList.remove("modal__open");
});

btnCloseEventregModal.addEventListener("click", () => {
  eventregModal.classList.remove("modal__open");
});

eventregForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!eventregForm.checkValidity()) {
    eventregForm.reportValidity();
    return;
  }
  const formData = new FormData(eventregForm);
  const formDataValues = Object.fromEntries(formData);
  if (formDataValues.password !== formDataValues.repeatPassword) {
    alert("Пароли не совпадают");
    return;
  }
  delete formDataValues.password;
  delete formDataValues.repeatPassword;
  formDataValues.createdOn = new Date();

  console.log(formDataValues);

  eventregForm.reset();

  eventregModal.classList.remove("modal__open");
});
