import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  width?: 'normal' | 'huge'
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'red' | 'blue'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  variant = 'primary',
  width = 'normal',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} width={width} {...props} variant={variant}>
    {children}
  </S.Wrapper>
)

export default Button
