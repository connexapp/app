import { render, screen } from '@testing-library/react'

import RecoveryPassword from '.'

describe('<RecoveryPassword />', () => {
  it('should render the heading', () => {
    const { container } = render(<RecoveryPassword />)

    expect(
      screen.getByRole('heading', { name: /RecoveryPassword/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
