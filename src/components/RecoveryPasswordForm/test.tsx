import { render, screen } from '@testing-library/react'

import RecoveryPasswordForm from '.'

describe('<RecoveryPasswordForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<RecoveryPasswordForm />)

    expect(
      screen.getByRole('heading', { name: /RecoveryPasswordForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
