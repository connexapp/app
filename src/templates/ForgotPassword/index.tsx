import Menu from 'components/Menu'
import ForgotPasswordForm from 'components/ForgotPasswordForm'

import * as S from './styles'

const ForgotPassword = () => (
  <S.Wrapper>
    <Menu />
    <S.Container>
      <ForgotPasswordForm />
    </S.Container>
  </S.Wrapper>
)

export default ForgotPassword
