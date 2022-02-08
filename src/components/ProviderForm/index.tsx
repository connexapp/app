import { useState, useContext } from 'react'
import {
  Email,
  AccountCircle,
  ErrorOutline
} from '@styled-icons/material-outlined'

import Router from 'next/router'
import { FormError } from 'components/Form'
import Checkbox from 'components/Checkbox'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { signUpProviderValidate, FieldErrors } from 'utils/validations'
import { AuthContext } from 'context/AuthContext'

import * as S from './styles'

const ProviderForm = () => {
  const { signInProvider } = useContext(AuthContext)
  const [formError, setFormError] = useState('')

  const [values, setValues] = useState({
    email: '',
    name: ''
  })

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = signUpProviderValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
console.log(values)
    const response = await signInProvider(values)

    if (response.error) {
      setFormError('Email já usado!')
      return
    }

    Router.push('/')
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
            label="Email do provedor"
            labelFor="name"
            placeholder="Coloque seu email"
            error={fieldError?.email}
            onInputChange={(v) => handleInput('email', v)}
            icon={<Email />}
          />
          <TextField
            label="Nome do provedor"
            labelFor="name"
            placeholder="Coloque seu nome"
            error={fieldError?.name}
            onInputChange={(v) => handleInput('name', v)}
            icon={<AccountCircle />}
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
            Tornar-se provedor
          </Button>
        </S.FormButton>
      </form>
    </S.Wrapper>
  )
}

export default ProviderForm
