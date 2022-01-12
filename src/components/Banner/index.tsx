import Button from 'components/Button'
import { Container } from 'components/Container'
import { AuthContext } from 'context/AuthContext'
import { useContext } from 'react'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

export type Banner ={
  box?: boolean
}

const Banner = ({ box }: Banner) => {
  const user = useContext(AuthContext)

  return (
    <S.Wrapper>
      <S.BannerImage />
      {box? 
      (
        <Container>
          <S.BoxInfo>
            <h1>Fale com Especialistas</h1>
            <p>
              Aqui você pode falar com os melhores e os maiores especialistas do
              Brasil nas suas áreas de atuação
            </p>
            {user?.user?.name !== undefined ? (
              null
            ) : (
              <Link href="register" passHref>
                <Button>Registrar-se</Button>
              </Link>
            )}
          </S.BoxInfo>
        </Container >
      ):
      (
        null
      )  
    }
      
    </S.Wrapper>
  )
}

export default Banner
