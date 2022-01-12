import CalendarComponent from './components/index'
import React, { useState } from 'react'
import { SizeCalendar } from './styles'
import moment from 'moment'
import { ServiceConsultancyEditing } from 'templates/EditingService'

export type CalendarProps = {
  uuid?: string | string[] | undefined
  provider: number,
  service: ServiceConsultancyEditing
}

function Calendar({ uuid, service, provider }: CalendarProps) {
  const [value, setValue] = useState(moment())

  return (
    <SizeCalendar>
      <CalendarComponent
        value={value}
        onChange={setValue}
        uuid={uuid}
        service={service}
        provider={provider}
      />
    </SizeCalendar>
  )
}

export default Calendar
