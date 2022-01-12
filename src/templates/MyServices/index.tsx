import { useEffect, useState } from 'react'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import Menu from 'components/Menu'
import Banner from 'components/Banner'
import React from 'react'
import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'

import * as S from './styles'
import Footer from 'components/Footer'
import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'

const MyServices = () => {
  const [myServices, setMyServices] = useState([])
  const { request } = useRequest()
  const userLogged = useContext(AuthContext)
  useEffect(() => {
    const getMyServices = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: `/service/getMyServicesByUser/${userLogged.user?.id}`
      }

      const response = await request(config)

      setMyServices(response)
    }

    getMyServices()
  }, [])

  return (
    <>
      <header>
        <Menu />
      </header>
      <section>
        <Banner box={false} />
      </section>
       {myServices.length > 0 ? 
       (
          <S.CardSection>
            <Container>
              <h2>Minhas Consultorias Compradas</h2>
              <CardSlider items={myServices} />
            </Container>
          </S.CardSection>
       ): (
          <S.CardSection>
            <Container>
              <h2>Você ainda não tem nenhuma consultoria comprada</h2>
            </Container>
          </S.CardSection>
       )}
      
      <Footer bottom={true} />
    </>
  )
}

export default MyServices
