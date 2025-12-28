import * as yup from 'yup';

export const buildUrlSchema = (existingUrls) =>
  yup.string()
    .required('Не должно быть пустым')
    .url('Ссылка должна быть валидным URL')
    .notOneOf(existingUrls, 'Этот поток уже добавлен');