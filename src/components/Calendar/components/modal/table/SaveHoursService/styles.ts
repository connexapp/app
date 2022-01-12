import styled, { css } from 'styled-components'

export const Wrapper = styled.div`

`

export const TableDiv = styled.div`
  height: 450px;
  width: 369px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  overflow-x: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  display: flex;
  min-width: 130px;
  max-width: 130px;
  line-height: 51px;
  min-height: 52px;
  max-height: 52px;
  padding: 0px 16px;
  display: flex;
  justify-content: center;

`

export const DivContent = styled.div`
  display: flex;
`

export const DivCheckBox = styled.div`
  display: flex;
  align-items: center;

  input{
    min-width: 58px;
    min-height: 25px;
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  border: none;
  margin-left: auto;
  width: 100%;
`

export const ButtonStyled = styled.button`
  width: 115px;
  height: 30px;
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
  background-color: rgb(236, 82, 82);
`
