import {
  HttpPostClient,
  HttpPostClientParams,
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http";

import { InvalidCrendencialsError } from "@/domain/errors/invalid-credencial-error";
import { ServerError } from "@/domain/errors/server-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AccountModel } from "@/domain/model/account-model";
import { AuthenticationParams } from "@/domain/usecases/authentication";
import { faker } from "@faker-js/faker";

export class HttpPostClientSpy
  implements HttpPostClient<AuthenticationParams, AccountModel>
{
  url?: string;
  body?: AuthenticationParams;
  response: HttpResponse<AccountModel> = {
    status: HttpStatusCode.ok,
    body: {
      name: faker.name.fullName(),
      accessToken: faker.datatype.uuid(),
    },
  };

  async post(
    params: HttpPostClientParams<AuthenticationParams>
  ): Promise<HttpResponse<AccountModel>> {
    this.url = params.url;
    this.body = params.body;

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
