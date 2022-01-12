import { useState, useEffect } from 'react'
import Menu from 'components/Menu'
import ServiceForm from 'components/ServiceForm'
import Calendar from 'components/CalendarProvider/Registring/Calendar'
import * as S from './styles'
import { toast, ToastContainer } from 'react-toastify'
import useRequest, { useRequestConfig } from 'hooks/useRequest'

type Provider = {
  id: number,
  email: string,
  name: string,
}

export type ServiceConsultancy = {
  title: string
  subtitle: string
  authorName: string
  thumbnailUrl: string
  price: string
  promotionPrice: string
  description: string
  videoUrl: string
  uuid: any,
  id: number,
  provider: Provider
}

const Provider = () => {
  const [service, setService] = useState<ServiceConsultancy | null>(null)
  const [providerId, setProviderId] = useState<number>()
  const [registeredService, setRegisteredService] = useState<boolean | null>(false)

  function setServiceAndProvider(service: any) {
    setService(service)
    setProviderId(service.provider.id)
    setRegisteredService(true)
  }

  return (
    
    <S.Wrapper>
      <Menu />
      <S.Container>
        <ServiceForm setServiceAndProvider={setServiceAndProvider}/>
        <Calendar service={service} providerId={providerId} registeredService={registeredService}/>
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


