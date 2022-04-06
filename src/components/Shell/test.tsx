import { render } from '@testing-library/react'

import Shell from '.'

describe('<Shell />', () => {
  it('should render the text', () => {
    const { container } = render(<Shell />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Shell />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#d4d4d4' })
  })
})
