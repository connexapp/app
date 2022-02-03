import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Background = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      height: 25rem;
    `}
    position: absolute;
    width: 100%;
    height: 45rem;
    background-color: #1e1e1c;
    color: ${theme.colors.white};
    z-index: -1;
  `}
`
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 115rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
export const ConsultancyBoxWrapper = styled.div`
  max-height: 320px;
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 2fr 1fr;

    `}
    color: ${theme.colors.white};
    padding-top: ${theme.spacings.xsmall};
  `}
`
export const ConsultancyInfoBox = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    > h2,
    > h3,
    > p {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
export const ConsultancyInfoBoxTitle = styled.h2`
  text-indent: 1.5rem;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
export const ConsultancyInfoBoxSubTitle = styled.h3`
  text-indent: 1.5rem;
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
  `}
`
export const ConsultancyInfoBoxAuthorName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
export const ConsultancyPricingBox = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      height: 30rem;
    `}
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};
  `}
`
export const ConsultancyBoxFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    >label{
      font-weight: 600
    }

    padding: 0 ${theme.spacings.small};

    > button {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`
export const ConsultancyPricing = styled.div`
  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Price = styled.span`
  ${({ theme }) => css`
    font-size: 2.5rem;
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
  `}
`
export const PromotionPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: #73726c;
    text-decoration: line-through;
  `}
`
export const ConsultancyImage = styled.img`
  width: 100%;
  height: 15rem;
`
export const ConsultancyInformation = styled.p`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 2fr 1fr;
    `}

    color: ${theme.colors.black};
    margin: 3.1rem 0;
  `}
`
export const ConsultancyInformationText = styled.p`
  text-indent: 1rem;
  margin: 0;
  ${({ theme }) => css`
    ${media.lessThan('medium')`
    `}
    overflow-wrap: break-word;
    font-size: ${theme.font.sizes.medium};
  `}
`
export const ConsultancyVideo = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    display: flex;
    justify-content: center;

    > iframe {
      width: 100%;
    }
  `}
`
export const Bold = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  `}
`

export const WrapperPaymentButtons = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0.3rem;
  `}

  ${media.lessThan('medium')`
    > button {
      margin-top: 0.5rem;
    }
  `}
`

export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
export const ALinkLabel = styled.a`
  display: flex;
  justify-content: flex-end;
  font-size: 1.7rem;
  text-decoration: none;
`
export const DivLine = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
  font-size: 2.2rem;
  font-weight: 600;
  font-family: ${theme.font.family};
  `}
`

export const DivLabel = styled.div`
   ${({ theme }) => css`
   display: flex;
    min-width: 80px;
    min-height: 52px;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
  `}

`

export const DivContent = styled.div`
   ${({ theme }) => css`
    display: flex;
    
  `}
`