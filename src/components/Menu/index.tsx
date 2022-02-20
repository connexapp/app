import { useState, useContext, useEffect } from 'react'
import {
  Menu as MenuIcon,
  ArrowDropDown
} from '@styled-icons/material-outlined'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'
import { AuthContext } from 'context/AuthContext'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import { useRequestConfig } from 'hooks/useRequest'
import { request } from 'http'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dealer, setDealer] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const avatar = user?.profilePictureUrl
  const diferente = '/circulo-avatar.jpg'
  console.log('user.id', user)

  useEffect(() => {

    const getSale = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: `/user/haveSale/${4}`,
        sendToken: true

      }

      const response = await request(config)
    }
    getSale()
  },[])

  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <S.LogoIcon src="/logoSvg.svg" />
      </Link>
      <MediaMatch lessThan="small">
        <MenuIcon onClick={() => setIsOpen(true)} />
      </MediaMatch>
      {!user && (
        <MediaMatch greaterThan="medium">
          <S.MenuButtons>
            <Link href="/login" passHref>
              <Button variant={'secondary'}>Logar</Button>
            </Link>
            <Link href="/register" passHref>
              <Button>Registar-se</Button>
            </Link>
          </S.MenuButtons>
        </MediaMatch>
      )}
      {!!user && (
        <MediaMatch greaterThan="medium">
          <S.MenuButtonsWrapper>
            <S.MenuButtonsUsername
              onClick={() => setIsOpenDropdown(!isOpenDropdown)}
            >
              <span>Bem vindo(a) {user.name}!</span>
              <ArrowDropDown />
            </S.MenuButtonsUsername>
            <S.MenuDropdown isOpen={isOpenDropdown}>
              <h3>Minha Conta</h3>
              <Link href="/profile" passHref>
                <p>Perfil</p>
              </Link>
              <Link href="/my-services" passHref>
                <p>Consultorias Compradas</p>
              </Link>
             {!dealer ?  <Link href="/my-consultancies-sold" passHref>
                <p>Consultorias Vendidas</p>
              </Link> : null}
              <p onClick={logout}>Sair</p>
            </S.MenuDropdown>
          </S.MenuButtonsWrapper>
          <S.ProfileAvatarWrapper>
            <img src={avatar ? avatar : diferente} alt="avatar image" />
          </S.ProfileAvatarWrapper>
        </MediaMatch>
      )}

      <S.MenuFull isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">Início</S.MenuLink>
          {!!user && (
            <>
              <S.MenuLink href="/profile">Minha conta</S.MenuLink>
              <S.MenuLink>Logout</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!user && (
          <S.RegisterBox>
            <Link href="/login" passHref>
              <Button>Logue agora</Button>
            </Link>
            <span>ou</span>
            <Link href="/register" passHref>
              <S.CreateAccount>Registre-se</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
