import {
  AuthenticationParams,
  HttpPostClient,
} from "@/data/protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: AuthenticationParams;

  async post(url: string, body: AuthenticationParams): Promise<void> {
    this.url = url;
    this.body = body;
    return Promise.resolve();
  }
}
