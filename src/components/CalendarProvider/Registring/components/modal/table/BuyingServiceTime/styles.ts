import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`

`

export const TableDiv = styled.div`
  ${({ theme }) => css`
    height: 450px;
    width: 369px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    overflow-x: auto;
  `}
`

export const Form = styled.form`
 ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    
  `}
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
    min-width: 130px;
    max-width: 130px;
    line-height: 51px;
    min-height: 52px;
    max-height: 52px;
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

export const DivCheckBox = styled.div`
   ${({ theme }) => css`
    display: flex;
    align-items: center;

    >input{
      min-width: 58px;
      min-height: 25px;
    }
  `}
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  border: none;
  margin-left: auto;
  width: 100%;
`

export const ButtonStyled = styled.button`
  width: 170px;
  height: 35px;
  font-size: 1.5rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(250, 250, 250);
  border-radius: 0.4rem;
  border: 0px;
  text-decoration: none;
  cursor: pointer;
  background-color:#EC5252;
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