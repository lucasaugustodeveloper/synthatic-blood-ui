import { describe, expect, test as it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Button from './index'

describe('<Button />', () => {
  it('should render the <Button />', () => {
    const { container } = render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeDefined()

    expect(container.firstChild).toMatchSnapshot()
  })
})
