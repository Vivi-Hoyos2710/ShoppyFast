import { useForm, useFormBag } from "../../src";
import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    document: yup.string().max(15).required(),
    number:yup.string().max(20).required(),
    email: yup.string().email().required(),
    
});
