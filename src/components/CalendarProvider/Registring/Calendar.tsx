import CalendarComponent from './components/index'
import React, { useState } from 'react'
import { SizeCalendar } from './styles'
import moment from 'moment'
import { ServiceConsultancy } from 'templates/Service'

export type CalendarProps = {
  providerId: number,
  service: ServiceConsultancy,
  registeredService: boolean
}

function Calendar({ service, providerId, registeredService }: CalendarProps) {

  const [value, setValue] = useState(moment())

  return (
    <SizeCalendar>
      <CalendarComponent
        value={value}
        onChange={setValue}
        service={service}
        providerId={providerId}
        registeredService={registeredService}
      />
    </SizeCalendar>
  )
}

export default Calendar
