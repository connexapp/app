import { render, screen } from '@testing-library/react'

import ConsultancyRead from '.'

describe('<ConsultancyRead />', () => {
  it('should render the heading', () => {
    const { container } = render(<ConsultancyRead />)

    expect(
      screen.getByRole('heading', { name: /ConsultancyRead/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
