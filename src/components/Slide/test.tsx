import { render, screen } from '@testing-library/react'

import Slide from '.'

describe('<Slide />', () => {
  it('should render the heading', () => {
    const { container } = render(<Slide />)

    expect(screen.getByRole('heading', { name: /Slide/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
