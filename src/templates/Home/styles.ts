import styled, { css } from 'styled-components'

export const Wrapper = styled.main``



export const ContainerHome = styled.div`
  display: flex;
  flex-direction: row;
  
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;

    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
    @media (max-width: 768px) {
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      /* flex-direction: column; */
    }
  `}
`


export const CardSection = styled.section`
  ${({ theme }) => css`
    margin: 0.8rem 0;

    > div > h2 {
      padding: 1.2rem 0;
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`
