import { useEffect } from 'react'
import { AuthContext } from 'context/AuthContext'
import Button from 'components/Button'
import * as S from './styles'
import { useContext, useState } from 'react'
import Calendar from '../../components/CalendarClient/Calendar'
import { FreeHours, Service } from 'templates/ConsultancyRead'
import { RowModal } from 'components/Calendar/components/modal/table/SaveHoursService'
import { userData } from 'components/Calendar/components/modal/table/userData'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import { mask } from "remask"
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export type ConsultancyBannerProps = {
  title: string
  subtitle: string
  authorName: string
  thumbnailUrl: string
  price: string
  promotionPrice: string
  description: string
  videoUrl: string
  uuid: any
  serviceId: number
  freeHours: FreeHours[]
  handleClick: (gatway: string) => void
}


export type horasCompradas = {
  day: string
  hourEnd: string
  hourStart: string
  linkMeet: string
}

const ConsultancyBanner = ({
  title,
  subtitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  thumbnailUrl,
  price,
  promotionPrice,
  description,
  videoUrl,
  serviceId,
  freeHours,
  uuid,
  handleClick
}: ConsultancyBannerProps) => {
  const [openCalendarComponent, setOpenCalendarComponent] = useState(false)
  const { user } = useContext(AuthContext)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [tableLine, setTableLine] = useState<RowModal[]>([] as RowModal[])
  const [meetLink, setMeetLink] = useState<string>('#')
  const [fakeHourPurchased, setFakeHourPurchased] = useState(false)
  const [service, setService] = useState<Service>()
  const [free, setFree] = useState<FreeHours[]>()
  const { request } = useRequest()
  const [horasComprada, setHorasComprada] = useState<horasCompradas>()
  const router = useRouter()

  const fakeDatePurchased: FreeHours[] = [{ date: '20012022', hours: [1] }]

  useEffect(() => {
    if(service){
      const getFreeHours = async () => {
        const config: useRequestConfig = {
          method: 'GET',
          url: `/schedule/getConsultancyPurchased/${user.id}/${service.id}`
        }
        const response = await request(config)
        setHorasComprada(response)

      }
      getFreeHours()
    }
  }, [service])


  useEffect(() => {
    function getHours() {
      const dayHoursModal: RowModal[] = []
      const dayModal = fakeDatePurchased.filter(x => x.date)
      const dayModalHours = dayModal.map(x => x.hours)
      
      userData.forEach(hourDefault => {
        dayModalHours.forEach(hourModal => {
          if (hourModal.includes(hourDefault.id)) {
            dayHoursModal.push(hourDefault)
          }
        })
      })
      setTableLine(dayHoursModal)
    }

    getHours()
  }, [])

  useEffect(() => {
    const getService = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: `/service/read/${uuid}`,
        sendToken: true
      }
      const response = await request(config)
      setFree(response.dateCalendar)
      setService(response.service)
    }

    getService()
  }, [uuid])
  
console.log('horasComprada', horasComprada)
console.log('tableLine', tableLine)

const goMeet = (e) => {
  e.preventDefault()
  toast.error('Link do meet ainda não foi adicionado')
}

return (
    <S.Wrapper>
      <S.Background />
      <S.Container>
        <S.ConsultancyBoxWrapper>
          <S.ConsultancyInfoBox>
            <S.ConsultancyInfoBoxTitle>{title}</S.ConsultancyInfoBoxTitle>
            <S.ConsultancyInfoBoxSubTitle>
              {subtitle}
            </S.ConsultancyInfoBoxSubTitle>
          </S.ConsultancyInfoBox>
          <S.ConsultancyPricingBox>
            <S.ConsultancyImage src={thumbnailUrl} />
            <S.ConsultancyBoxFooter>
              <label>Preço por Hora</label>
              <S.ConsultancyPricing>
                <S.Price>R$ {price}</S.Price>
                {!!promotionPrice && (
                  <S.PromotionPrice>R$ {promotionPrice}</S.PromotionPrice>
                )}
              </S.ConsultancyPricing>
              {horasComprada ?
                (<div>
                  <S.Label>Seu Horário marcado para</S.Label>
                  {tableLine.map(({ id, start, end,}, index) => (
                    <S.DivLine key={index}>
                      <S.DivContent>
                        <div>
                          <S.DivLabel>
                            <label>{mask(horasComprada.day, ["99/99/9999"])}</label>
                          </S.DivLabel>
                        </div>
                        <S.DivContentHours>
                          Das
                          <S.DivLabel>
                            <label>{horasComprada.hourStart}</label>
                          </S.DivLabel>
                          às
                          <S.DivLabel>
                            <label>{horasComprada.hourEnd}</label>
                          </S.DivLabel>
                        </S.DivContentHours>
                      </S.DivContent>
                    </S.DivLine>
                  ))}
                  {!horasComprada.linkMeet ? 
                    <S.ALinkLabel  href={`https://meet.google.com/${horasComprada.linkMeet}`} target={`_blank`} >Ir para o Meet</S.ALinkLabel> 
                    :
                    <S.ALinkLabel onClick={goMeet}>Ir para o Meet</S.ALinkLabel> 
                  }
                </div>
                ) : !!user && (
                  <>
                    {!openCalendarComponent && (
                      <Button
                        onClick={() => {
                          setOpenCalendar(true), setOpenCalendarComponent(true)
                        }}
                      >
                        Marcar agora
                      </Button>
                    )}
                    {!!openCalendar && <Calendar service={service} uuid={uuid} registering={false} freeHours={free} size={'280px'} label={'Marque seu dia'} />}
                  </>
                )
              }
              {!user && (
                <Button as="a" href="/login">
                  Marcar agora
                </Button>
              )}
            </S.ConsultancyBoxFooter>
          </S.ConsultancyPricingBox>
        </S.ConsultancyBoxWrapper>
        <S.ConsultancyInformation>
          <div style={{ maxWidth: "750px" }}>
          {description?.split(".").map(linha => (
              <S.ConsultancyInformationText>
                {linha}
              </S.ConsultancyInformationText>
            ))}
            {/* <S.ConsultancyInformationText> */}
              {/* {description} */}
            {/* </S.ConsultancyInformationText> */}
            <S.ConsultancyVideo>
              <iframe
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.ConsultancyVideo>
          </div>
        </S.ConsultancyInformation>
      </S.Container>
    </S.Wrapper>
  )
}

export default ConsultancyBanner
