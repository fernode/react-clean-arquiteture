export class ServerError extends Error {
  constructor() {
    super("Algo inesperado aconteceu, estamos trabalhando para resolver.");
    this.name = "ServerError";
  }
}
