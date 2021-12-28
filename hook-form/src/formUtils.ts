import * as yup from "yup";

export const requirededFieldErrorMessage = 'Merci de remplir ce champ'
export const emailInvalideErrorMessage = 'Ce n\'espt pas un email valide'

export const requiredString = () => yup.string().required(requirededFieldErrorMessage)