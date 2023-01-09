import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { InvalidCrendencialsError } from "@/domain/errors/invalid-credencial-error";
import { ServerError } from "@/domain/errors/server-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import {
  MockAccountModel,
  MockAuthentication,
} from "@/domain/test/mock-account";
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
    httpClientSpy.response = {
      status: HttpStatusCode.ok,
    };
    await sut.auth(MockAuthentication());

    expect(httpClientSpy.url).toBe(url);
  });

  it("should call httpPostClient with correct body", async () => {
    const { sut, httpClientSpy } = makeSut();
    const body = MockAuthentication();
    httpClientSpy.response = {
      status: HttpStatusCode.ok,
    };
    await sut.auth(body);

    expect(httpClientSpy.body).toEqual(body);
  });

  it("Should throw InvalidCrendencialError if HttpClient returns 401", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      status: HttpStatusCode.unauthorized,
    };

    const promise = sut.auth(MockAuthentication());

    expect(promise).rejects.toThrow(new InvalidCrendencialsError());
  });

  it("Should throw UnexpectedErorr if HttpClient returns 400", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      status: HttpStatusCode.badRequest,
    };

    const promise = sut.auth(MockAuthentication());

    expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it("Should throw ServerError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      status: HttpStatusCode.serverError,
    };

    const promise = sut.auth(MockAuthentication());

    expect(promise).rejects.toThrow(new ServerError());
  });

  it("Should return correct result if returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = MockAccountModel();
    httpClientSpy.response = {
      status: HttpStatusCode.ok,
      body: httpResult,
    };

    await sut.auth(MockAuthentication());

    expect(httpClientSpy.response.body).toEqual(httpResult);
  });
});
