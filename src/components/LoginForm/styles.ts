import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const FormInputs = styled.div`
  ${({ theme }) => css`
    > div {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
export const FormButton = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0;
  `}
`
export const CreateAccount = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
export const TextBold = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    text-decoration: underline;
  `}
`
export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    text-decoration: underline;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    text-align: right;
  `}
`
export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: red;
    font-size: ${theme.font.sizes.small};
    svg {
      width: 1.6rem;
    }
  `}
`
