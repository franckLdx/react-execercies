import React, { FC, useContext, useMemo } from 'react'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { useLogin } from './useLogin';
import { displayFieldError, emailInvalideErrorMessage, requiredString } from '../formUtils';
import { isAuthenticationErrorType } from './authenticationError';
import { loginContext } from './loginContext';
import { AlertError } from '../error/AlertError';

interface FormFields {
  email: string,
  password: string
}

export const LoginForm: FC = () => {
  const schema = useMemo(
    () => yup.object({
      email: requiredString().email(emailInvalideErrorMessage),
      password: requiredString(),
    }).required(),
    []
  );

  const { setToken } = useContext(loginContext);
  const mutation = useLogin();

  const { handleSubmit, formState, control } = useForm<FormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const submit = ({ email, password }: FormFields) => {
    mutation.mutate(
      { email, password },
      {
        onSuccess: setToken,
        onError: () => setToken(undefined),
      }
    )
  };

  return (
    <Container fixed maxWidth="sm" >
      <Paper elevation={4}>
        {mutation.isError &&
          <AlertError messsage={isAuthenticationErrorType(mutation.error) ? 'Autentication failed' : 'Unexpected error'} />
        }
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Controller
                name="email"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    label='email'
                    variant="filled"
                    autoComplete='email'
                    aria-label='Plese enter email'
                    {...displayFieldError(formState.errors.email)}
                  />
                }
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    label='password'
                    variant="filled"
                    type="password"
                    autoComplete='password'
                    aria-label='Plese enter password'
                    {...displayFieldError(formState.errors.password)}
                  />
                }
              />
            </Stack>
            <Button
              variant="contained"
              type='submit'
              size='large'
              disabled={mutation.isLoading}
            >
              LOGIN
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container >
  )
}