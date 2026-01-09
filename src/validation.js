import * as yup from 'yup'
export const buildUrlSchema = existingUrls =>
  yup.string()
    .required('errors.required')
    .url('errors.invalidUrl')
    .notOneOf(existingUrls, 'errors.duplicate')
