import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 50rem;
    margin: 3rem auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
export const PageTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const PageSubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const HorizontalLine = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.lightGray};
  `}
`
