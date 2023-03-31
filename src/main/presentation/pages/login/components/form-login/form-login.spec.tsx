import React from 'react'
import { render } from '@testing-library/react'
import { FormLogin } from './'
import userEvent from '@testing-library/user-event'
import { describe, it } from 'vitest'

class ValidationSpy implements Validation {
  errorMessage: string
  inputName: string
  inputValue: string

  validate(inputName: string, inputValue: string): string {
    this.inputName = inputName
    this.inputValue = inputValue

    return this.errorMessage
  }
}

const makeSut = () => {
  const validationSpy = new ValidationSpy()
  const { container } = render(<FormLogin validation={validationSpy} />)

  return {
    container,
    validationSpy,
  }
}

describe('<FormLogin/>', () => {
  it('should render form without errors', () => {
    const { container } = makeSut()

    const emailInput = container.querySelector('input[type="email"]')
    expect(emailInput).toBeInTheDocument()
  })

  it('should check if form fields are working correctly', async () => {
    const { container } = makeSut()
    const emailInput = container.querySelector('input[type="email"]')
    const passwordInput = container.querySelector('input[type="password"]')

    await userEvent.type(emailInput, 'test@test.com')
    expect(emailInput).toHaveValue('test@test.com')

    await userEvent.type(passwordInput, 'password123')
    expect(passwordInput).toHaveValue('password123')
  })

  it('should call validation with correct email', async () => {
    const { container, validationSpy } = makeSut()
    const emailInput = container.querySelector('input[type="email"]')

    await userEvent.type(emailInput, 'VALID_EMAIL')
    expect(validationSpy.inputName).toBe('email')
    expect(validationSpy.inputValue).toBe('VALID_EMAIL')
  })

  it('should call validation with correct password', async () => {
    const { container, validationSpy } = makeSut()
    const passwordInput = container.querySelector('input[type="password"]')

    await userEvent.type(passwordInput, 'VALID_PASSWORD')
    expect(validationSpy.inputName).toBe('password')
    expect(validationSpy.inputValue).toBe('VALID_PASSWORD')
  })
})
