import i18next from 'i18next';

export const renderError = (input, feedback, errorCode) => {
  if (!errorCode) {
    input.classList.remove('is-invalid');
    feedback.textContent = '';
    return;
  }

  input.classList.add('is-invalid');
  feedback.textContent = i18next.t(errorCode);
};
