import RegisterForm from 'components/RegisterForm'
import Auth from 'templates/Auth'

export default function Login() {
  return (
    <Auth title="Registre-se" subTitle="Crie uma nova conta">
      <RegisterForm />
    </Auth>
  )
}
