import styled from 'styled-components'

export const Calendar = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  
  #input {
  }
  .line {
    display: flex;
    height: calc(100% / 7);
    border-bottom: 1px solid black;
  }
  a {
    text-decoration: none;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    &:hover {
      box-shadow: 0 0 1px #bae7ff;
      color: #f5f5f5;
    }
  }
`
export const Day = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  cursor: pointer;
  border-right: 1px solid black;
  border-left: 1px solid black;
  &:hover {
    background-color: rgba(0.3, 0.3, 0.3, 0.1);
  }
  .before {
    background-color: rgba(0.3, 0.3, 0.3, 0.1);
    display: inline-block;
    margin: 0;
    height: 100%;
    width: 100%;
    &:hover {
      background-color: rgba(0.3, 0.3, 0.3, 0.5);
    }
  }
  .selected {
    display: revert;
    background-color: rgba(0.3, 0.3, 0.3, 0.1);
    display: inline-block;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .today {
    margin: 0;
    background-color: rgba(0.3, 0.3, 0.3, 0.1);
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  .daysAvailable {
    margin: 0;
    font-weight: 800;
    display: inline-block;
    height: 100%;
    width: 100%;
  }
`
export const Body = styled.div`
  height: 100%;

`

export const DayNames = styled.div`
  background-color: transparent;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-left: 1px solid black;
  height: calc(100% / 7);
  

`

export const Week = styled.div`
border-right: 1px solid black;
  margin: 0;
  color: black;
  width: calc(100% / 7);
  height: 100%;
  display: inline-block;
`

export const Header = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  font-size: 10px;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
`

export const Previous = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0.3, 0.3, 0.3, 0.1);
  }
`

export const Current = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MonthName = styled.div`
  margin-left: '20px';
  margin-right: '20px';
  cursor: 'pointer';
  font-size: 14px;

`
export const Next = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0.3, 0.3, 0.3, 0.1);
  }
`

export const InputDiv = styled.div`

`

export const Label = styled.label`
  font-weight: 600;
  font-size: 2.2rem;
  user-select: none;
`

export const ContentModal = styled.div`
  width: 270px;
  height: 350px;
  border-radius: 36px;
  background-color: #f5f5f5;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: initial;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 50px;
  right: 0px;
`

export const BotonClose = styled.button`
  background-color: red;
  border: none;
  border-radius: 30px;
  color: white;
  height: 30px;
  width: 100px;
  cursor: pointer;
  margin-right: 5px;
`

export const BotonSave = styled.button`
  border: none;
  border-radius: 30px;
  background-color: blue;
  color: white;
  height: 30px;
  width: 100px;
  cursor: pointer;
`

export const DivEvent = styled.div`
  width: 250px;
  height: 200px;
  padding: 0px 30px;
  box-sizing: border-box;
  overflow-y: auto;
`

export const EventDiv = styled.div`
  overflow-y: auto;
  height: 57px;
  font-size: 10px;
  color: white;
`
