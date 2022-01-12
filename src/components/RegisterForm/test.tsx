import { render, screen } from '@testing-library/react'

import RegisterForm from '.'

describe('<RegisterForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<RegisterForm />)

    expect(
      screen.getByRole('heading', { name: /RegisterForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
