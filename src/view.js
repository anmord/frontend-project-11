export const showValidation = (input, feedback, message) => {
  input.classList.add('is-invalid');
  feedback.textContent = message;
};

export const clearValidation = (input, feedback) => {
  input.classList.remove('is-invalid');
  feedback.textContent = '';
};