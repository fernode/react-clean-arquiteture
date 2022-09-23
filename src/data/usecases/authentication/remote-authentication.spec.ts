import { describe, expect, it } from "vitest";
import { HttpPostClient } from "../../protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  it("should call httpPostClient with correct url", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string, body: {}): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const url = "teste";
    const httpClientSpy = new HttpPostClientSpy();

    const sut = new RemoteAuthentication(url, httpClientSpy);
    await sut.auth();

    expect(httpClientSpy.url).toBe(url);
  });
});
