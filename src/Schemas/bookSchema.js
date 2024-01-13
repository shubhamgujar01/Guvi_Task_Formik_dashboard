import * as Yup from 'yup';

export const bookSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    Author: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    ISBN: Yup.string().matches(/\bISBN\s\d-\d{3}-\d{5}-\d\b/, 'Invalid ISBN format'),
    date: Yup.string().required('Required')
});