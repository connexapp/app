import { render, screen } from '@testing-library/react'

import ConsultancyBanner from '.'

describe('<ConsultancyBanner />', () => {
  it('should render the heading', () => {
    const { container } = render(<ConsultancyBanner />)

    expect(
      screen.getByRole('heading', { name: /ConsultancyBanner/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
