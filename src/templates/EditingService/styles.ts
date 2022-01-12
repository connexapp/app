import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 50rem;
    margin: 3rem auto;
    display: 'flex' !important;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    @media (min-width: 750px) {
      max-width: 90rem;
      display: flex;
      justify-content: space-between;
    }
  `}
`
