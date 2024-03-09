import { FieldError } from "react-hook-form";

export const displayFieldError = (error: FieldError | undefined) => ({
  error: error !== undefined,
  helperText: error?.message
})