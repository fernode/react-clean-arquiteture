import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { MockAuthentication } from "@/domain/test/mock-authentication";
import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import { RemoteAuthentication } from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};
describe("RemoteAuthentication", () => {
  it("should call httpPostClient with correct url", async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);

    await sut.auth(MockAuthentication());

    expect(httpClientSpy.url).toBe(url);
  });
});
