import { HttpPostClientParams } from "@/data/protocols/http";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { AxiosHttpClient } from "./axios-http-client";

vi.mock("axios");

const makeSut = () => new AxiosHttpClient();

const mockPostRequest = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.name.firstName(),
    email: faker.internet.email(),
  },
});

const mockAxiosResult = {
  status: faker.random.numeric(),
  data: {
    name: faker.name.firstName(),
    email: faker.internet.email(),
  },
};

describe("AxiosHttpClient", () => {
  it("should call axios with correct verb and values", () => {
    const sut = makeSut();
    const request = mockPostRequest();

    sut.post(request);

    expect(axios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it("should call axios with correct body", async () => {
    vi.mocked(axios.post).mockResolvedValueOnce(mockAxiosResult);

    const sut = makeSut();
    const request = mockPostRequest();
    const httpResponse = await sut.post(request);

    expect(httpResponse).toEqual({
      statusCode: mockAxiosResult.status,
      body: mockAxiosResult.data,
    });
  });
});
