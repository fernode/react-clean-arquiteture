export class InvalidCrendencialsError extends Error {
  constructor() {
    super("Credenciais invalidas");
    this.name = "InvalidCrendencialsError";
  }
}
