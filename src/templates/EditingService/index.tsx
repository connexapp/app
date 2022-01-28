import { useState, useEffect } from 'react'
import Menu from 'components/Menu'
import ServiceForm from 'components/ServiceFormEditing'
import Calendar from 'components/CalendarProvider/Editing/Calendar'
import * as S from './styles'
import { toast, ToastContainer } from 'react-toastify'
import useRequest, { useRequestConfig } from 'hooks/useRequest'

export type Uuid ={
  uuid?: string
}

export type Provider = {
  email: string
  id: number
  name: string
}


export type ServiceConsultancyEditing = {
  description: string
  discountPercentage: number
  id: number
  price: string
  priceKind: string
  status: string
  subtitle: string
  thumbnailUrl: string
  title: string
  uuid: string
  videoUrl: string
  provider: Provider
  hours?: DateCalendar[]
}

export class ResponseServiceRead {
  service: ServiceConsultancyEditing;
  dateCalendar: DateCalendar[];
}

export class DateCalendar {
  date: string;
  hours: number[];
}

const Provider = ({ uuid }: Uuid) => {
  const [service, setService] = useState<ServiceConsultancyEditing | null>(null)
  const [providerId, setProviderId] = useState<number>()

  const { request } = useRequest()
  
  useEffect(() => {
    if(uuid){
      const getService = async () => {
        const config: useRequestConfig = {
          method: 'GET',
          url: `/service/read/${uuid}`
        }

        const response = await request(config)
        
        if (response.error) {
          toast.error('um erro inesperado')
          return
        }

        const temporario = {
          hours: response.dateCalendar
        }
        const responseWhithDate = Object.assign(response.service, temporario)
        setService(responseWhithDate)
        setProviderId(responseWhithDate.provider.id)
      }
      getService()
    }
    
  }, [])

  return (

    <S.Wrapper>
      <Menu />
      <S.Container>
        <ServiceForm service={service} />
        <Calendar service={service} provider={providerId}/>
      </S.Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </S.Wrapper>
    )
}

export default Provider


