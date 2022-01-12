import { render, screen } from '@testing-library/react'

import ServiceForm from '.'

describe('<ServiceForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<ServiceForm />)

    expect(
      screen.getByRole('heading', { name: /ServiceForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
