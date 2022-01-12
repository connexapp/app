import { render, screen } from '@testing-library/react'

import ForgotPasswordForm from '.'

describe('<ForgotPasswordForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<ForgotPasswordForm />)

    expect(
      screen.getByRole('heading', { name: /ForgotPasswordForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
