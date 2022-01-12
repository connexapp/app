import Link from 'next/link'
import {
  ChangeEvent,
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect
} from 'react'
import Button from 'components/Button'
import { Container } from 'components/Container'
import ProfileForm from 'components/ProfileForm'
import { AuthContext } from 'context/AuthContext'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import CardSlider, { CardSliderProps } from 'components/CardSlider'
import * as S from './styles'
import { getCurrentUser } from 'utils/localStorage'
import Provider from 'templates/Provider'
import { CardProps } from 'components/Card'

type Provider = {
  email: string
  id: number
  name: string
}

type User = {
  email: string
  phoneNumber: string
  provider: Provider
  name: string
  id: number
  profilePictureUrl: string
  role: string
  uuid: string
}

const Profile = () => {
  const { user } = useContext(AuthContext)
  const diferent = '/circulo-avatar.jpg'
  const { request } = useRequest()

  const fileInput = useRef<null | HTMLInputElement>(null)
  const [avatar, setAvatar] = useState('')
  const [myServices, setMyServices] = useState<CardProps[]>([] as CardProps[])

  const handleAvatarChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const formData = new FormData()

        formData.append('avatar', event.target.files[0])

        const configs: useRequestConfig = {
          method: 'POST',
          url: '/user/uploadAvatar',
          data: formData,
          sendToken: true
        }

        const urlAvatar = await request(configs)
        if (urlAvatar) {
          window.location.reload()
        }
        setAvatar(urlAvatar)
      }
    },
    []
  )

  useEffect(() => {
    async function getServicesCreatedByUser() {
      const user: User = getCurrentUser();
      const configs: useRequestConfig = {
        method: 'GET',
        url: `/service/getServicesCreatedByUser/${user.provider?.id}`,
        data: user.provider?.id,
        sendToken: true
      }

      const myServices = await request(configs)
      
      if (!myServices.error) {
        setMyServices(myServices)
      }
    }

    getServicesCreatedByUser()
  }, [])

  return (
    <S.Wrapper>
      <Container>
        <h1>Minha conta</h1>
        <S.ProfileFormWrapper>
          <ProfileForm />
          <S.AvatarInput>
            <S.ProfileAvatarWrapper>
              {user?.profilePictureUrl ?
                (
                  <img style={{ width: 230, height: 230 }} src={user.profilePictureUrl} alt="" />
                ) :
                (
                  <img style={{ width: 230, height: 230 }} src={diferent} alt="" />

                )
              }
            </S.ProfileAvatarWrapper>
            <S.Input>
              <label
                htmlFor="input-file"
                onClick={() => fileInput?.current?.click()}
              >
                Selecionar um arquivo
              </label>
              <input
                style={{ display: 'none' }}
                type="file"
                id="avatar"
                ref={fileInput}
                multiple={false}
                name="avatar"
                accept="image/png, image/gif, image/jpeg"
                onChange={handleAvatarChange}
              />
            </S.Input>
          </S.AvatarInput>
        </S.ProfileFormWrapper>

        {!user?.provider && (
          <Link href="/provider" passHref>
            <Button>Clique aqui para se tornar um provedor!</Button>
          </Link>
        )}

        {!!user?.provider && (
          <Link href="/service" passHref>
            <Button>Clique aqui para cadastrar uma consultoria!</Button>
          </Link>
        )}
      </Container>
      {!!user?.provider && (
        <S.CardSection>
          {myServices.length > 0 ? (
          <Container>
            <h2>Minhas consultoria cadastradas</h2>
            <CardSlider items={myServices} />
            </Container>

          ) : ("")}
        </S.CardSection>
      )}
        
      
    </S.Wrapper>
  )
}
export default Profile
