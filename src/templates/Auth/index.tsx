import Menu from 'components/Menu'
import * as S from './styles'

export type AuthProps = {
  title: string
  subTitle: string
  children: React.ReactNode
}

const Auth = ({ title, subTitle, children }: AuthProps) => (
  <S.Wrapper>
    <Menu />
    <S.Container>
      <S.PageTitle>{title}</S.PageTitle>
      <S.PageSubTitle>{subTitle}</S.PageSubTitle>
      <S.HorizontalLine />
      {children}
    </S.Container>
  </S.Wrapper>
)

export default Auth
