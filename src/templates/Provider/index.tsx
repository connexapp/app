import Menu from 'components/Menu'
import ProviderForm from 'components/ProviderForm'
import * as S from './styles'

const Provider = () => (
  <S.Wrapper>
    <Menu />
    <S.Container>
      <ProviderForm />
    </S.Container>
  </S.Wrapper>
)

export default Provider
