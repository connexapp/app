import { render, screen } from '@testing-library/react'

import ProviderForm from '.'

describe('<ProviderForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProviderForm />)

    expect(
      screen.getByRole('heading', { name: /ProviderForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
