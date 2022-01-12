import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

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

export const Input = styled.div`
  display: flex;
  border: 2px solid #e8e8e8;
  height: 4.2rem;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-left: 15px;
  outline: none;
  background: #fafafa;
`
export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 2.2rem;
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.xsmall};
  `}
`
export const LabelThumbnail = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
export const SepareButton = styled.div`
  margin-top: 10px;
`
