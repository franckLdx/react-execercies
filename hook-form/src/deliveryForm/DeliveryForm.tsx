import React, { FC, useEffect, useMemo } from 'react'

import Container from '@mui/material/Container/Container'
import Paper from '@mui/material/Paper/Paper'
import { Controller, useForm, useWatch } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import Select from '@mui/material/Select/Select'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import FormControl from '@mui/material/FormControl/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { displayFieldError, requiredRules } from '../formUtils'
import { useCreditCardBin, useGetCreditCardBrand } from './useCreditCardBrand'

interface FormFields {
  floor: number | '',
  elevator: boolean,
  creditCard: string
}

export const DeliveryForm: FC = () => {
  const { handleSubmit, formState, control, setError, clearErrors } = useForm<FormFields>({
    defaultValues: {
      floor: '',
      elevator: true,
      creditCard: ''
    },
    shouldFocusError: true,
  });

  const floor = useWatch<FormFields, 'floor'>({
    control,
    name: 'floor'
  });

  const needElevator = useMemo(
    () => floor !== 0 && floor !== '',
    [floor]
  )

  const creditCardNumber = useWatch<FormFields, 'creditCard'>({
    control,
    name: 'creditCard'
  });

  const creditCardBin = useCreditCardBin(creditCardNumber)
  const creditCardBrandQuery = useGetCreditCardBrand(creditCardBin)

  useEffect(
    () => {
      if (!creditCardBrandQuery.isError) {
        clearErrors('creditCard')
      } else {
        setError('creditCard', {
          type: 'validity',
          message: creditCardBrandQuery.error as string
        })
      }
    },
    [creditCardBrandQuery.error]
  )

  const submit = () => { }

  return (
    <Container fixed maxWidth="sm" >
      <Paper elevation={4}>
        <form onSubmit={handleSubmit(submit)}>
          <FormControl fullWidth>
            <Controller
              name='floor'
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <>
                  <InputLabel id="floor-label">floor</InputLabel>
                  <Select
                    {...field}
                    labelId="floor-label"
                    id="demo-simple-select"
                    label="Floor"
                  >
                    <MenuItem value={0}>RDC</MenuItem>
                    <MenuItem value={1}>1er</MenuItem>
                    <MenuItem value={2}>2eme et +</MenuItem>
                  </Select>
                </>
              }
            />
            {needElevator && <Controller
              name='elevator'
              control={control}
              rules={needElevator ? requiredRules : { required: false }}
              render={({ field }) =>
                <FormControlLabel control={<Checkbox {...field} />} label="Elevator ?" />
              }
            />}
            <Controller
              name="creditCard"
              control={control}
              render={({ field }) =>
                <TextField
                  {...field}
                  label='Credit card'
                  variant="filled"
                  autoComplete='Credit card'
                  aria-label='Plese enter Credit card'
                  {...displayFieldError(formState.errors.creditCard)}
                />
              }
            />
            <Button
              variant="contained"
              type='submit'
              size='large'
              disabled={!creditCardBrandQuery.isSuccess}
            >
              SAVE
            </Button>
          </FormControl>
        </form>
      </Paper>
      {creditCardBrandQuery.isSuccess && (creditCardBrandQuery.data as any).brand}
    </Container >
  )
}