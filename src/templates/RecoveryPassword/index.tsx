import Menu from 'components/Menu'
import RecoveryPasswordForm from 'components/RecoveryPasswordForm'

import * as S from './styles'

const RecoveryPassword = () => (
  <S.Wrapper>
    <Menu />
    <S.Container>
      <RecoveryPasswordForm />
    </S.Container>
  </S.Wrapper>
)

export default RecoveryPassword
