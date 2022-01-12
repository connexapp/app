import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import Router from 'next/router'

import useRequest, { useRequestConfig } from 'hooks/useRequest'
import { FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'
import { useState } from 'react'
import { forgotValidate, FieldErrors } from 'utils/validations'

const ForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const { request } = useRequest()

  const [values, setValues] = useState({
    email: ''
  })

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    const configs: useRequestConfig = {
      method: 'POST',
      url: '/user/requestPasswordReset',
      data: {
        email: values.email
      }
    }

    const response = await request(configs)

    if (response.error) {
      setFormError('Conta não encontrada')
      return
    }

    Router.push('/')
  }

  return (
    <S.Wrapper>
      <S.PageTitle>Recuperar Senha</S.PageTitle>
      <S.PageSubTitle>Digite seu email para recuperar sua senha</S.PageSubTitle>
      <S.HorizontalLine />

      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <S.FormInputs>
          <TextField
            label="Email de sua conta"
            labelFor="email"
            placeholder="Coloque seu email"
            error={fieldError?.email}
            onInputChange={(v) => handleInput('email', v)}
            icon={<Email />}
          />
        </S.FormInputs>
        <S.FormButton>
          <Button fullWidth width={'huge'}>
            Recuperar senha
          </Button>
        </S.FormButton>
      </form>
    </S.Wrapper>
  )
}

export default ForgotPassword
