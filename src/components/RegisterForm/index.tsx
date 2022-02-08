import {
  Email,
  Lock,
  AccountCircle,
  Phone,
  ErrorOutline
} from '@styled-icons/material-outlined'
import Checkbox from 'components/Checkbox'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormError } from 'components/Form'

import * as S from './styles'
import { useContext, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import { signUpValidate, FieldErrors } from 'utils/validations'
import { mask } from 'remask'

const RegisterForm = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    confirm_password: ''
  })
  const { signUp, signInProvider } = useContext(AuthContext)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    const signUpForm = {
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: mask(values.phoneNumber, ['9999999999'])
    }

    let valueSignInProvider = { email: values.email, name: values.name }
    console.log("valueSignInProvider", valueSignInProvider)
    await signUp(signUpForm)
    
    const response = await signInProvider(valueSignInProvider)
    if (response) {
      console.log(response)
      setFormError('Email já usado!')
      return
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
            label="Nome Completo"
            labelFor="name"
            placeholder="Coloque seu nome"
            onInputChange={(v) => handleInput('name', v)}
            error={fieldError?.name}
            icon={<AccountCircle />}
          />
          <TextField
            label="Email"
            type="email"
            labelFor="email"
            placeholder="Coloque seu email"
            onInputChange={(v) => handleInput('email', v)}
            error={fieldError?.email}
            icon={<Email />}
          />
          <TextField
            label="Número de celular"
            labelFor="phoneNumber"
            placeholder="Coloque seu celular"
            onInputChange={(v) => handleInput('phoneNumber', v)}
            error={fieldError?.phoneNumber}
            icon={<Phone />}
            value={mask(values.phoneNumber, [
              '(99) 9999-9999',
              '(99) 9 9999-9999'
            ])}
          />
          <TextField
            label="Senha"
            type="password"
            labelFor="password"
            placeholder="Coloque sua senha"
            onInputChange={(v) => handleInput('password', v)}
            error={fieldError?.password}
            icon={<Lock />}
          />
          <TextField
            label="Reescreva sua senha"
            type="password"
            labelFor="repassword"
            placeholder="Coloque sua senha"
            onInputChange={(v) => handleInput('confirm_password', v)}
            error={fieldError?.confirm_password}
            icon={<Lock />}
          />
        </S.FormInputs>
        <S.FormCheckbox>
          <Checkbox
            isChecked={false}
            labelFor="terms"
            label="Li e aceito as Políticas de Privacidade e Termos de Serviço"
          />
        </S.FormCheckbox>
        <S.FormButton>
          <Button fullWidth width={'huge'}>
            Registre-se
          </Button>
        </S.FormButton>
      </form>
    </S.Wrapper>
  )
}

export default RegisterForm
