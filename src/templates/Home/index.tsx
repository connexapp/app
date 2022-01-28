import { useEffect, useState } from 'react'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import Menu from 'components/Menu'
import Banner from 'components/Banner'
import React from 'react'
import CardSliderHome from 'components/CardSliderHome'
import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'

import * as S from './styles'
import Footer from 'components/Footer'

const Home = () => {
  const [servicesRecents, setServiceRecents] = useState([])
  const [servicesMostVieweds, setServiceMostVieweds] = useState([])
  const { request } = useRequest()

  useEffect(() => {
    const getServicesRecents = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: '/service/getRecents'
      }

      const response = await request(config)
      setServiceRecents(response)
    }

    const getServicesMostVieweds = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: '/service/getMostVieweds'
      }

      const response = await request(config)

      setServiceMostVieweds(response)
    }

    getServicesRecents()
    getServicesMostVieweds()
  }, [request])

  return (
    <>
      <header>
        <Menu />
      </header>
      <section>
        <Banner box={true}/>
      </section>
      <S.CardSection>
        <Container>
          <h2>Fale com um especialista</h2>
          <CardSlider items={servicesRecents} />
        </Container>
      </S.CardSection>
      <S.CardSection>
        <Container>
          <h2>Aprenda com os Melhores</h2>

            <CardSliderHome items={servicesMostVieweds} />
        </Container>
      </S.CardSection>
      <Footer bottom={false}/>
    </>
  )
}

export default Home
