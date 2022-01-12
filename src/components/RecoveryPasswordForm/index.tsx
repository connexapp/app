import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import Router from 'next/router'

import useRequest, { useRequestConfig } from 'hooks/useRequest'
import { FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'
import { useState } from 'react'
import { resetValidate, FieldErrors } from 'utils/validations'

const ForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const { request } = useRequest()

  const [values, setValues] = useState({
    password: '',
    confirm_password: '',
    code: ''
  })

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    const configs: useRequestConfig = {
      method: 'POST',
      url: '/user/recoverPassword',
      data: {
        code: values.code,
        password: values.password
      }
    }

    const response = await request(configs)

    if (response.error) {
      setFormError('Código inválido')
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
            label="Código de recuperação"
            labelFor="code"
            placeholder="Coloque seu email"
            error={fieldError?.code}
            onInputChange={(v) => handleInput('code', v)}
            icon={<Email />}
          />
          <TextField
            label="Nova senha"
            labelFor="password"
            type="password"
            placeholder="Coloque sua senha"
            error={fieldError?.password}
            onInputChange={(v) => handleInput('password', v)}
            icon={<Email />}
          />
          <TextField
            label="Confirme sua nova senha"
            labelFor="confirm_password"
            type="password"
            placeholder="Confirme sua nova senha"
            error={fieldError?.confirm_password}
            onInputChange={(v) => handleInput('confirm_password', v)}
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
