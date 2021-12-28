import React, { FC, useCallback, useMemo } from 'react'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from './useLogin';
import { TextField } from '@mui/material';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { emailInvalideErrorMessage, requiredString } from '../formUtils';
import { isAuthenticationErrorType } from './authenticationError';

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

  const defaultValues = useMemo<FormFields>(
    () => ({
      email: "",
      password: ""
    }),
    []
  );

  const mutation = useLogin();

  const { handleSubmit, formState, control } = useForm<FormFields>({
    resolver: yupResolver(schema),
    defaultValues
  });

  const submit = useCallback(
    ({ email, password }: FormFields) => {
      mutation.mutate({ email, password })
    },
    []
  );

  return (
    <Container fixed maxWidth="sm" >
      <Paper elevation={4}>
        {mutation.isError &&
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {isAuthenticationErrorType(mutation.error) ? 'Autentication failed' : 'Unexpected error'}
          </Alert>
        }
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='email'
                    variant="filled"
                    autoComplete='email'
                    aria-label='Plese enter email'
                    error={formState.errors.email !== undefined}
                    helperText={formState.errors.email?.message}
                  />
                )}
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
                    error={formState.errors.password !== undefined}
                    helperText={formState.errors.password?.message}
                  />}
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