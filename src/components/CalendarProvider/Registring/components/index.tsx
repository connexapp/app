import React, { useState } from 'react'
import './componentsStyles.tsx'
import * as S from './componentsStyles'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import Header from './header'
import Modal from './modal'
import moment, { Moment } from 'moment'
import { Service } from 'templates/ConsultancyRead'
import { toast } from 'react-toastify'

type Input = {
  value: Moment
  onChange: Function
  service: Service
  providerId: number
  registeredService: boolean
}

export type selectedTimesDay = {
  date: string,
  hours: number[]
  month: string
}

export type RegisterOfCalendar = {
  day: string,
  hour: number[],
  month: string
}

export default function CalendarComponent({ value, onChange, service, providerId, registeredService }: Input) {
  const [open, setOpen] = useState(false)
  
  const [selectedTimesDay, setSelectedTimesDay] = useState<RegisterOfCalendar | null>(null)

  const [diasCadastrado, setDiasCadastrado] = useState<RegisterOfCalendar[]>([] as RegisterOfCalendar[])
  
  const [dayModal, setDayModal] = useState<Moment>(moment())
  
  const calendar = buildCalendar(value)

  function setOpenModal(open: boolean) {
    setOpen(open)
  }

  function isBefore(day: moment.Moment) {
    return day.isBefore(new Date(), 'day')
  }

  function isSame(day: moment.Moment) {
    return day.isSame(new Date(), 'day')
  }

  function setDataRequestFunction(param) {
    let data = Object.assign({}, param)
    diasCadastrado.map((data2, index) => {
      if(data2.day === data.day){
        diasCadastrado.splice(index, 1)
      }})
    diasCadastrado.push(data);
  }

  async function changeDay(day: moment.Moment) {
    if (!service) {
      toast.error('cadastre primeiro uma consultoria')
      return
    }


    const qualquer = diasCadastrado.filter((data) => data.day == day.format("DDMMYYYY"))

    if (qualquer.length > 0) {
      setSelectedTimesDay(qualquer[0])
    }else{
      setSelectedTimesDay(null)
    }
    
    if (isBefore(day) || isSame(day)) {
      return false
    }

    setOpen(true)
    setDayModal(day)
  }

  return (
    <>
      <S.Calendar>
        <S.Label>Cadastre o Dia/Horário</S.Label>
        <Header value={value} setValue={onChange} />
        <S.Body>
          <S.DayNames>
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((week, i) => (
              <S.Week key={i}>{week}</S.Week>
            ))}
          </S.DayNames>
          {calendar.map((week, i) => (
            <div key={i} className="line">
              {week.map((day, index) => (
                <S.Day
                  key={index}
                  onClick={() =>
                    changeDay(day) && !beforeToday(day)
                  }
                >

                  <div className={dayStyles(day, value, diasCadastrado)}>
                    {day.format('D').toString()}
                    <div className="hart"></div>
                  </div>
                </S.Day>
              ))}
            </div>
          ))}
        </S.Body>
      </S.Calendar>
      <Modal
        open={open}
        day={dayModal}
        setSelectedTimesDay={setSelectedTimesDay}
        selectedTimesDay={selectedTimesDay}
        setOpenModal={setOpenModal}
        service={service}
        providerId={providerId}
        setDataRequestFunction={setDataRequestFunction}
      />
    </>
  )
}
