export class UnexpectedError extends Error {
  constructor() {
    super("Algo inesperado aconteceu, tente novamente em breve.");
    this.name = "UnexpectedError";
  }
}
