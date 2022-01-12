import { render, screen } from '@testing-library/react'

import CardSlider from '.'

describe('<CardSlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardSlider />)

    expect(
      screen.getByRole('heading', { name: /CardSlider/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
