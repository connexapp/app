import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const CardSection = styled.section`
  ${({ theme }) => css`
    margin: 0.8rem 0;

    > div > h2 {
      padding: 1.2rem 0;
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`
export const containerTable = styled.div`
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: auto;

`
export const ATable = styled.a``
export const PTable = styled.p`
  margin: 0;
`
