import React, { useState } from 'react'
import './componentsStyles.tsx'
import * as S from './componentsStyles'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import Header from './header'
import Modal from './modal'
import moment, { Moment } from 'moment'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import { ErrorOutline } from '@styled-icons/material-outlined';
import { FreeHours, Service } from 'templates/ConsultancyRead'
import { toast } from 'react-toastify'

type Input = {
  value: Moment
  onChange: Function
  service: Service
  providerId: number
  registeredService : boolean
}

export type selectedTimesDay = {
  date: string,
  hours: number[]
}

export default function CalendarComponent({ value, onChange, service, providerId, registeredService}: Input) {
  const [open, setOpen] = useState(false)
  const [selectedTimesDay, setSelectedTimesDay] = useState<selectedTimesDay>()
  const [dayModal, setDayModal] = useState<Moment>(moment())
  const { request } = useRequest()
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
  
  async function CheckHasSelectedTimes(day: moment.Moment) {
    const configSchedule: useRequestConfig = {
      method: 'GET',
      url: `schedule/hoursSelected/${service.id}/${day.format('DDMMYYYY')}`,
      sendToken: true,
    }

    const response = await request(configSchedule)
    if (response){
      return 
    }
    return response
  }



  async function changeDay(day: moment.Moment) {


    
    if (!service) {
      toast.error('cadastre primeiro uma consultoria')
      return
    }
    // const configSchedule: useRequestConfig = {
    //   method: 'GET',
    //   url: `schedule/hoursSelected/${service.id}/${day.format('DDMMYYYY')}`,
    //   sendToken: true,
    // }
  // depois arrumar api response vazio

    // const response = await request(configSchedule)

    if (isBefore(day) || isSame(day)) {
      return false
    }
      // fazer um gte na api com esse dia pra saber se esse servico ou user jah tem se sim mostrar se na n faz nd
    const responseHay = await CheckHasSelectedTimes(day)
    if (responseHay){
      const FakeDataDoDiaClicado = {
        date: "07012022",
        hours: [1, 2, 3, 4]
      }
        setSelectedTimesDay(FakeDataDoDiaClicado)
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
                  <div className={dayStyles(day, value, service)}>
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
        selectedTimesDay={selectedTimesDay}
        setOpenModal={setOpenModal}
        service={service}
        providerId={providerId}
      />
    </>
  )
}
