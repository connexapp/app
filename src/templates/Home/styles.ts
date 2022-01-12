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
