import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormLogin } from './'
import userEvent from '@testing-library/user-event'
import { describe, it } from 'vitest'

describe('<FormLogin/>', () => {
  it('should render form without errors', () => {
    render(<FormLogin />)
    const formTitle = screen.getByText(/Login/i)
    expect(formTitle).toBeInTheDocument()
  })

  it('should check if form fields are working correctly', async () => {
    render(<FormLogin />)
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)

    await userEvent.type(emailInput, 'test@test.com')
    expect(emailInput).toHaveValue('test@test.com')

    await userEvent.type(passwordInput, 'password123')
    expect(passwordInput).toHaveValue('password123')
  })
})
