import Loginform from 'components/LoginForm'
import Auth from 'templates/Auth'

export default function Login() {
  return (
    <Auth title="Login" subTitle="Logue com a sua conta">
      <Loginform />
    </Auth>
  )
}
