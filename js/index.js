const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form__input');
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const validarForm = () => {
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      input.parentElement.classList.add('form__contentInput--error');
      input.classList.add('form__input--show');
    } else {
      input.parentElement.classList.remove(
        'form__contentInput--error'
      );
      input.classList.remove('form__input--show');
    }
    if (emailRegex.test(form.EmailAddress.value.trim())) {
      form.EmailAddress.parentElement.classList.remove(
        'form__contentInput--error'
      );
      form.EmailAddress.classList.remove('form__input--show');
    } else {
      form.EmailAddress.parentElement.classList.add(
        'form__contentInput--error'
      );
      form.EmailAddress.classList.add('form__input--show');
    }
  });
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validarForm();
});
