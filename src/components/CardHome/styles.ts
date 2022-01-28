import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: 29.3rem;
  min-width: 29.3rem;
  max-height: 24.8rem;
  min-height: 24.8rem;
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    border: 1px solid #e8e8e8;
  `}
    margin: 0 1.6rem 1.6rem 1.6rem;

  @media (min-width: 1170px){
    margin: 0 1.6rem 1.6rem 1.6rem;

  }


`
export const CardTitle = styled.p`
  ${({ theme }) => css`
    padding: 0 0.5rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  `}
`

export const Containerimagem = styled.div`
  width: 100%;
  max-height: 16.3rem;
  min-height: 16.3rem;
  
`


export const Image = styled.img`
  width: 100%;
  max-height: 16.3rem;
  filter: brightness(100%);
  transition: filter 0.1s ease-in;

  :hover {
    filter: brightness(70%);
  }
`
export const CardAuthor = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    padding: 0.5rem 0.5rem;
    font-size: ${theme.font.sizes.xsmall};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.primary};
  `}
`
export const PromotionPrice = styled.span`
  color: #73726c;
  text-decoration: line-through;
`
export const CardPrices = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0.3rem 0.5rem;

    > span {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
