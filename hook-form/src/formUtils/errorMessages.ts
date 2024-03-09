import { ValidationRule } from "react-hook-form";
import * as yup from "yup";

export const requiredFieldErrorMessage = 'Merci de remplir ce champ';
export const emailInvalideErrorMessage = 'Ce n\'est pas un email valide';

export const requiredRules: ValidationRule<any> = { required: true, message: requiredFieldErrorMessage };

export const requiredString = () => yup.string().required(requiredFieldErrorMessage);
