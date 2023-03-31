export class ValidationSpy implements Validation {
  errorMessage: string
  inputName: string
  inputValue: string

  validate(inputName: string, inputValue: string): string {
    this.inputName = inputName
    this.inputValue = inputValue

    return this.errorMessage
  }
}
