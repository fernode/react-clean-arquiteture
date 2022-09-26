import {
  AuthenticationParams,
  HttpPostClient,
} from "@/data/protocols/http/http-post-client";
import {
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http/http-response";
import { InvalidCrendencialsError } from "@/domain/errors/invalid-credencial-error";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: AuthenticationParams;
  response: HttpResponse = {
    status: HttpStatusCode.noContent,
  };

  async post(url: string, body: AuthenticationParams): Promise<HttpResponse> {
    this.url = url;
    this.body = body;
    switch (this.response.status) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCrendencialsError();

      default:
        return Promise.resolve(this.response);
    }
  }
}
