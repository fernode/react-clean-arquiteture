import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { MockAuthentication } from "@/domain/test/mock-authentication";
import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  it("should call httpPostClient with correct url", async () => {
    const url = faker.internet.url();
    const httpClientSpy = new HttpPostClientSpy();

    const sut = new RemoteAuthentication(url, httpClientSpy);
    await sut.auth(MockAuthentication());

    expect(httpClientSpy.url).toBe(url);
  });
});
