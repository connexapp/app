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
