import React, { ChangeEventHandler, FC, useMemo, useState } from 'react'

import { Button, TextField, TextFieldProps } from '@mui/material'

import styles from './manual.module.css'

interface ValidField {
  status: 'valid'
  error: undefined
}

interface ErrorField {
  status: 'error'
  error: string
}

interface IntermediateFiled {
  status: 'intermediat'
  error: undefined
}

type FieldStatus = (ValidField | ErrorField | IntermediateFiled) & { value: string }

type TextFielProps = Pick<TextFieldProps, 'value' | 'color' | 'focused' | 'helperText'>

const getTextFielProps = (fieldStatus: FieldStatus): TextFielProps => {
  switch (fieldStatus.status) {
    case 'valid':
      return { value: fieldStatus.value, color: 'success', focused: true }
    case 'error':
      return { value: fieldStatus.value, color: 'error', helperText: fieldStatus.error, focused: true }
    default:
      return { value: fieldStatus.value }
  }
}

export const Manual: FC = () => {
  const [whoAreYouStatus, setWhoAreYouStatus] = useState<FieldStatus>({ value: '', status: 'intermediat', error: undefined })
  const onWhoAreYouChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
    const you = e.target.value.trim();
    if (you === "aaa") {
      setWhoAreYouStatus({ value: you, status: 'valid', error: undefined })
    } else if (you.length >= 3) {
      setWhoAreYouStatus({ value: you, status: 'error', error: "Don't know you" })
    } else {
      setWhoAreYouStatus({ value: you, status: 'intermediat', error: undefined })
    }
  }

  const [reallyWhoAreYouStatus, setReallyWhoAreYouStatus] = useState<FieldStatus>({ value: '', status: 'intermediat', error: undefined })
  const onReallyWhoAreYouChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
    const you = e.target.value.trim();
    if (you.toUpperCase() === whoAreYouStatus.value.toUpperCase()) {
      setReallyWhoAreYouStatus({ value: you, status: 'valid', error: undefined })
    } else if (you.length >= 3) {
      setReallyWhoAreYouStatus({ value: you, status: 'error', error: "No, it's not you" })
    } else {
      setReallyWhoAreYouStatus({ value: you, status: 'intermediat', error: undefined })
    }
  }

  const valid = useMemo(
    () => whoAreYouStatus.status === 'valid' && reallyWhoAreYouStatus.status === "valid",
    [whoAreYouStatus.status, reallyWhoAreYouStatus.status]
  )

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <TextField label="who are you ?" {...getTextFielProps(whoAreYouStatus)} onChange={onWhoAreYouChange} variant="standard" />
          <TextField label="who are you for real ?" {...getTextFielProps(reallyWhoAreYouStatus)} onChange={onReallyWhoAreYouChange} variant="standard" />
        </div>
        <Button disabled={!valid} variant="contained" color="primary">Let's go</Button>
      </div>
    </main>
  )
}
