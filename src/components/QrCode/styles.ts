import styled from "styled-components";

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
  margin:1px;
  border: 0px;
  text-decoration: none;
  cursor: pointer;
  background-color:#EC5252;
  `

  export const QrCodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 500px;
  `
  export const QrCodeImage = styled.div`
  display: flex;
`

export const QrCodeCopieEcolaContainer = styled.div`
display: flex;  
flex-direction: column;
justify-content: space-around;
align-items: stretch;
`
export const QrCodeCopieEcolaContainerTitle = styled.div`
display: flex;  
`

export const QrCodeCopieEcolaContainerDescription = styled.div`
display: flex;  
`
export const QrCodeCopieEcolaContainerButton = styled.div`
display: flex;  
`
 