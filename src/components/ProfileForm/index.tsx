import { useState, useEffect } from 'react'
import {
  Email,
  AccountCircle,
  ErrorOutline,
  Phone
} from '@styled-icons/material-outlined'
import { FormError } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'
import useRequest, { useRequestConfig } from 'hooks/useRequest'

import * as S from './styles'
import { changeProfileData, FieldErrors } from 'utils/validations'
import { mask } from 'remask'
const ProfileForm = () => {
  const [formError, setFormError] = useState('')

  const [values, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  })

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const { request } = useRequest()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = changeProfileData(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    const config: useRequestConfig = {
      method: 'PATCH',
      url: '/user',
      sendToken: true,
      data: {}
    }

    if (values.name) {
      config.data.name = values.name
    }

    if (values.email) {
      config.data.email = values.email
    }

    if (values.phoneNumber) {
      config.data.phoneNumber = values.phoneNumber
    }

    if (values.name || values.email) {
      const response = await request(config)

      if (response.error) {
        setFormError('Usúario ou senha inválidos')
      }
    }
  }

  useEffect(() => {
    const getInfos = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: '/user/read',
        sendToken: true,
        data: {}
      }

      const { name, email, phoneNumber } = await request(config)

      const userInfos = {
        name,
        email,
        phoneNumber
      }

      setValues(userInfos)
    }

    getInfos()
  }, [])

  return (
    <S.Wrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <S.ProfileForm onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          icon={<AccountCircle />}
          placeholder="Digite seu novo nome"
          value={values.name}
          error={fieldError?.name}
          onInputChange={(v) => handleInput('name', v)}
        />

        <TextField
          label="Email"
          icon={<Email />}
          placeholder="Digite seu novo email"
          value={values.email}
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
        />

        <TextField
          label="Celular"
          icon={<Phone />}
          placeholder="Digite seu novo celular"
          value={mask(values.phoneNumber, [
            '(99) 9999-9999',
            '(99) 9 9999-9999'
          ])}
          error={fieldError?.phoneNumber}
          onInputChange={(v) => handleInput('phoneNumber', v)}
        />

        <S.FormButton>
          <Button type="submit" variant="secondary">
            Alterar
          </Button>
        </S.FormButton>
      </S.ProfileForm>
    </S.Wrapper>
  )
}

export default ProfileForm
