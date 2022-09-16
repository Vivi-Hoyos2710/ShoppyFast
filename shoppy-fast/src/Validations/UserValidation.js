import { useForm, useFormBag } from "../../src";
import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required("Campo de nombre vacio"),
    surname: yup.string().required("Campo de apellido vacio"),
    document: yup.string().max(15).required("Campo de documento vacio"),
    number:yup.string().max(20).required("Campo de numero vacio"),
    email: yup.string().email("No es un email valido").required("Campo de email vacio"),
    
});
