import * as S from './styles'
import { AuthContext } from 'context/AuthContext'
import { useContext } from 'react'

export type FooterProps = {
  bottom: boolean
}

const Footer = ({ bottom }: FooterProps) => {

  const user = useContext(AuthContext)

  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=551199170-0482')
  }
  return (
    <S.Footer bottom={bottom}>
      {user.isAuthenticated !== true ?
      (<S.Wrapper>
        <div>
          <S.DivImagem>
            <img src="/43853.png" />
          </S.DivImagem>
          <p>Somos uma plataforma que une pessoas que queiram compartilhar</p>
          <br />
          <p>
            seus conhecimentos e serviços pessoas que queiram aprender e
            contrata-los
          </p>
        </div>
        <div>
          <S.DivImagem>
            <img src="/chat.png" />
          </S.DivImagem>
          <p>Converse de forma personalizada com qualquer pessoa do Brasil</p>
          <br />
          <p> e do mundo, 100% online, ao vivo, simples e profissional.</p>
        </div>
        <div>
          <S.DivImagem>
            <img src="/11034.png" />
          </S.DivImagem>
          <p>Construa conexões, relacionamento e network com profissionais, </p>
          <br />
          <p>especialistas e referências de todos os segmentos.</p>
        </div>
      </S.Wrapper>) : (null)}
      <S.DivContentContactWrapper>
        <S.DivContentContact>
          <S.Logo>
            <p>Connex Inc - 2021</p>
          </S.Logo>
          <S.WhatsAppIcon>
            <div onClick={handleClick}>
              <img src="/whatsapp.png" />

              <p>Entrar em contato</p>
            </div>
          </S.WhatsAppIcon>
        </S.DivContentContact>
      </S.DivContentContactWrapper>
    </S.Footer>
  )
}

export default Footer
