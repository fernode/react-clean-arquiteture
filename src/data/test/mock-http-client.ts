import {
  AuthenticationParams,
  HttpPostClient,
} from "@/data/protocols/http/http-post-client";
import {
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http/http-response";
import { InvalidCrendencialsError } from "@/domain/errors/invalid-credencial-error";
import { ServerError } from "@/domain/errors/server-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";

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
      case HttpStatusCode.ok:
        return this.response;
      case HttpStatusCode.unauthorized:
        throw new InvalidCrendencialsError();
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new UnexpectedError();
    }
  }
}
