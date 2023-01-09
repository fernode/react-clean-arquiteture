import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import { InvalidCrendencialsError } from "@/domain/errors/invalid-credencial-error";
import { ServerError } from "@/domain/errors/server-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AccountModel } from "@/domain/model";
import {
  Authentication,
  AuthenticationParams,
} from "@/domain/usecases/authentication";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (response.status) {
      case HttpStatusCode.ok:
        return response.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCrendencialsError();
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new UnexpectedError();
    }
  }
}
