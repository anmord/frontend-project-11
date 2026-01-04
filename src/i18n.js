import * as yup from 'yup';
import i18next from 'i18next';
import ru from './locales/ru.js';

export default () =>
  i18next.init({
    lng: 'ru',
    resources: { ru },
  }).then(() => {
    yup.setLocale({
      mixed: {
        required: 'errors.required',
      },
      string: {
        url: 'errors.invalidUrl',
      },
    });
  });