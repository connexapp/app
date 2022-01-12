import CalendarComponent from './components/index'
import React, { useState } from 'react'
import { SizeCalendar } from './styles'
import moment from 'moment'
import { FreeHours, Service } from 'templates/ConsultancyRead'

export type SizeCalendarProps = {
  size: string
  label: string
  freeHours?: FreeHours[]
  registering: boolean
  uuid?: string | string[] | undefined
  registeredService?: boolean
  provider?: number,
  service?: Service
}

export type SizeProps = {
  size: string
}

function Calendar({ size, label, freeHours, registering, uuid, service, provider }: SizeCalendarProps) {
  const [value, setValue] = useState(moment())

  return (
    <SizeCalendar size={size} >
      <CalendarComponent
        freeHours={freeHours}
        value={value}
        onChange={setValue}
        label={label}
        registering={registering}
        uuid={uuid}
        service={service}
        provider={provider}
      />
    </SizeCalendar>
  )
}

export default Calendar
