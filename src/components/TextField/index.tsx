import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  textArea?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  error,
  disabled = false,
  textArea = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && !textArea && (
          <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>
        )}
        {!!textArea && (
          <S.TextArea
            type="text"
            // @ts-ignore: Unreachable code error
            onChange={onChange}
            value={value}
            iconPosition={iconPosition}
            disabled={disabled}
            {...props}
          />
        )}
        {!textArea && (
          <S.Input
            type="text"
            onChange={onChange}
            value={value}
            iconPosition={iconPosition}
            disabled={disabled}
            {...props}
          />
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
