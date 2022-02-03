import React from 'react'
import { Header, Previous, Current, Next, MonthName } from './componentsStyles'


export default function CalendarHeader({ value, setValue }) {
  function currMonthName() {
    return value.format('MMMM')
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month')
  }

  function nextMonth() {
    return value.clone().add(1, 'month')
  }

  function thisMouth() {
    return value.isSame(new Date(), 'month')
  }

  function monthName(props: String) {
    switch (props) {
      case 'January':
        return 'Janeiro'
      case 'February':
        return 'Fevereiro'
      case 'March':
        return 'Março'
      case 'April':
        return 'Abril'
      case 'May':
        return 'Maio'
      case 'June':
        return 'Junho'
      case 'July':
        return 'Julho'
      case 'August':
        return 'Agosto'
      case 'September':
        return 'Setembro'
      case 'October':
        return 'Outubro'
      case 'November':
        return 'Novembro'
      case 'December':
        return 'Dezembro'
    }
  }

  return (
    <Header>
      {!thisMouth() ? (
        <Previous onClick={() => !thisMouth() && setValue(prevMonth())}>
          {String.fromCharCode(9668)}
        </Previous>
      ) : (
        ''
      )}
      <Current>
        <MonthName>{monthName(currMonthName())}</MonthName>
      </Current>
      <Next onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(9658)}
      </Next>
    </Header>
  )
}
