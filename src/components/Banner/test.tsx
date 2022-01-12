import { render, screen } from '@testing-library/react'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = render(<Banner box={true}/>)

    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
