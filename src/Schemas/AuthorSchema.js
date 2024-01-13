import * as Yup from 'yup';

export const AuthorSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    DOB: Yup.string()
        .required('Required'),
   
    Biography: Yup.string()
    .min(15, 'Too Short!')
    .required('Required')
});