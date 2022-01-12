import Joi from 'joi'

const fieldsValidations = {
  name: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phoneNumber: Joi.string().min(11).max(16).required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string()
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'confirm password does not match with password' })
}

const fieldsProfileValidations = {
  name: Joi.string().min(5).allow('').optional(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .allow('')
    .optional(),
  phoneNumber: Joi.string().min(11).max(16).required()
}

const fieldsServiceValidations = {
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  videoUrl: Joi.string().required()
}

const fieldsRecoverPassword = {
  code: Joi.string().required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string()
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type ValidateServiceValues = {
  title: string
  subtitle: string
  description: string
  price: string
  videoUrl: string
}

export function signInServiceValidate(values: ValidateServiceValues) {
  const schema = Joi.object(fieldsServiceValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ValidateRegisterValues = {
  email: string
  name: string
  phoneNumber: string
  password: string
  confirm_password: string
}

export function signUpValidate(values: ValidateRegisterValues) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ValidateProviderValues = {
  email: string
  name: string
}

export function signUpProviderValidate(values: ValidateProviderValues) {
  const { email, name } = fieldsValidations
  const schema = Joi.object({ email, name })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ValidateProfileDataValues = {
  email: string
  name: string
  phoneNumber: string
}

export function changeProfileData(values: ValidateProfileDataValues) {
  const schema = Joi.object(fieldsProfileValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ValidateLoginValues = {
  email: string
  password: string
}

export function signInValidate(values: ValidateLoginValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ValidateForgotValidateValues = {
  email: string
}

export function forgotValidate(values: ValidateForgotValidateValues) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ValidateResetValues = {
  code: string
  password: string
  confirm_password: string
}

export function resetValidate(values: ValidateResetValues) {
  const schema = Joi.object(fieldsRecoverPassword)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
