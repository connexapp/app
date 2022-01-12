import styled, { css } from 'styled-components'
import FooterProps from './'

export type FooterProps = {
  bottom: boolean
}

export const Footer = styled.footer`
    position: absolute;
    margin-top: 20px;
    /* width: 100vw; */
    bottom: ${({ bottom }: FooterProps) => (bottom ? '0' : null)};
    
    right: 0px;
    left: 0px;
  `

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
    margin-top: 55px;
    text-align: center;
    font-size: 0.6rem;
    height: 30rem;

    > div {
      cursor: pointer;
      display: grid;
      align-items: center;
      margin-right: 10px;
    }

    > div > svg {
      width: 3rem;
      height: 3rem;
      margin-left: ${theme.spacings.xxlarge};
      background-color: #25d366;
      border-radius: 50%;
    }
    > div > p {
      margin-left: 3px;
      font-size: 13px;
      font-weight: 600;
    }
    @media (max-width: 900px) {
      display: grid;
      height: auto;
      width: 100%;
      padding: 1.6rem 1.6rem 70px 1.6rem;
    }
  `}
`
export const DivContentContact = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  justify-content: space-around;
`
export const DivImagem = styled.div`
  height: 163px;
  width: 261px;
  margin-left: auto;
  margin-right: auto;
  > img {
    margin-left: auto;
    height: 145px;
    width: 146px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  > p {
    font-weight: 700;
    font-size: 11px;
  }
`
export const WhatsAppIcon = styled.div`
  > div {
    height: auto;
    display: grid;
  }
  > div > img {
    height: 35px;
    width: 35px;
    margin-left: auto;
    margin-right: auto;
  }
  > div > p {
    font-weight: 700;
    font-size: 9px;
  }
`
export const DivContentContactWrapper = styled.div`
  background-color: #eaeaea;
  height: 75px;
      display: flex;

  @media (max-width: 400px) {
    width: auto;
  }
`
