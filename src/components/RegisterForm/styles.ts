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
export const FormCheckbox = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
    font-size: 1.5rem;
  `}
`
