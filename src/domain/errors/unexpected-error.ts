export class UnexpectedError extends Error {
  constructor() {
    super("Algo inesperado aconteçeu, tente novamente em breve.");
    this.name = "UnexpectedError";
  }
}
