import React, { useEffect, useState } from 'react'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import Menu from 'components/Menu'
import Banner from 'components/Banner'
import CardSliderHome from 'components/CardSliderHome'
import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin} from 'antd';

import * as S from './styles'
import Footer from 'components/Footer'

const Home = () => {
  const [servicesRecents, setServiceRecents] = useState([])
  const [servicesMostVieweds, setServiceMostVieweds] = useState([])
  const { request } = useRequest()
  const antIcon = <LoadingOutlined style={{ fontSize: 44, color: "#EC5252" }} spin />
  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    const getServicesRecents = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: '/service/getRecents'
      }

      const response = await request(config)
      setIsSpinning(false)
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
          <Spin style={{ width: "fit-content", margin: "30px auto 0 auto "}} indicator={antIcon} spinning={isSpinning}>
            {!isSpinning && 
              <CardSliderHome items={servicesRecents} />
            }
          </Spin>
        </Container>
      </S.CardSection>
      
      <Footer bottom={isSpinning}/>
    </>
  )
}

export default Home
