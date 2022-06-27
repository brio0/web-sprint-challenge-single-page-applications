import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size required'),
    sauce: yup
        .string()
        .oneOf(['original', 'ranch', 'bbq', 'spinach'], 'sauce required'),
    pepporoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    bacon: yup.boolean(),
    mushrooms: yup.boolean(),
    special: yup
        .string()
        .trim()
})
export default formSchema;