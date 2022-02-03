import React, { useState } from 'react'
import './componentsStyles.tsx'
import * as S from './componentsStyles'
import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'
import Header from './header'
import Modal from './modal'
import moment, { Moment } from 'moment'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import { FormError } from './../../../LoginForm/styles';
import { ErrorOutline } from '@styled-icons/material-outlined';
import { ServiceConsultancyEditing } from 'templates/EditingService'

type Input = {
  value: Moment
  onChange: Function
  uuid?: string | string[] | undefined
  service: ServiceConsultancyEditing
  provider: number
}

export type selectedTimesDay = {
  date: string,
  hours: number[]
}

export default function CalendarComponent({ value, onChange, uuid, service, provider}: Input) {
  const [formError, setFormError] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedTimesDay, setSelectedTimesDay] = useState<selectedTimesDay | null>(null)
  const [dayModal, setDayModal] = useState<Moment>(moment())
  const { request } = useRequest()
  const calendar = buildCalendar(value)

  function setOpenModal(open: boolean) {
    setOpen(open)
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
    
    if (day.isBefore(new Date(), 'day') || day.isSame(new Date(), 'day')){
      return
    }

    service.hours.forEach(date => {
      if(date.date == day.format('DDMMYYYY')){
        setSelectedTimesDay(date)
      }
    })

    setOpen(true)
    setDayModal(day)
  }

  return (
    <>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
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
        uuid={uuid}
        open={open}
        setSelectedTimesDay={setSelectedTimesDay}
        day={dayModal}
        selectedTimesDay={selectedTimesDay}
        setOpenModal={setOpenModal}
        service={service}
        provider={provider}
      />
    </>
  )
}
