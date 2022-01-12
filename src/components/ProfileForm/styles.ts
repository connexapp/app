import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const ProfileForm = styled.form`
  ${({ theme }) => css`
    > button {
      display: flex;
      justify-content: flex-end;
    }

    > div {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
export const FormButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xsmall};
  `}
`
