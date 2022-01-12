import React, { useState, useContext } from 'react'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import Link from 'next/link'

import { FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { AuthContext, SignInData } from 'context/AuthContext'
import { FieldErrors, signInValidate } from 'utils/validations'

import * as S from './styles'

const LoginForm = () => {
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState<SignInData>({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const { signIn } = useContext(AuthContext)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // sign in
    const response = await signIn(values)

    if (response.error) {
      setFormError('Usúario ou senha inválidos')
    }
  }

  return (
    <S.Wrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <S.FormInputs>
          <TextField
            label="Email"
            type="email"
            placeholder="Coloque seu email"
            error={fieldError?.email}
            onInputChange={(v) => handleInput('email', v)}
            icon={<Email />}
          />
          <TextField
            label="Senha"
            type="password"
            placeholder="Coloque sua senha"
            error={fieldError?.password}
            onInputChange={(v) => handleInput('password', v)}
            icon={<Lock />}
          />
        </S.FormInputs>
        <S.FormButton>
          <Button fullWidth width={'huge'} disabled={loading}>
            {loading ? <FormLoading /> : <span>Entrar</span>}
          </Button>
        </S.FormButton>
      </form>
      <S.CreateAccount>
        Ainda não possui uma conta?{' '}
        <Link href="register" passHref>
          <S.TextBold>Crie uma aqui</S.TextBold>
        </Link>
      </S.CreateAccount>
      <div>
        <Link href="/esqueci-minha-senha" passHref>
          <S.ForgotPassword>Esqueceu sua senha?</S.ForgotPassword>
        </Link>
      </div>
    </S.Wrapper>
  )
}

export default LoginForm
