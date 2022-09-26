import {
  AuthenticationParams,
  HttpPostClient,
} from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCrendencialsError } from "@/domain/errors/invalid-credencial-error";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const response = await this.httpPostClient.post(this.url, params);

    switch (response.status) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCrendencialsError();

      default:
        await this.httpPostClient.post(this.url, params);
    }
  }
}
