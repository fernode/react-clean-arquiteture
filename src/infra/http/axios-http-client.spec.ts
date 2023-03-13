import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { mockAxiosPostResult, mockPostRequest } from "../test";
import { AxiosHttpClient } from "./axios-http-client";

vi.mock("axios");

const makeSut = () => new AxiosHttpClient();

describe("AxiosHttpClient", () => {
  it("should call axios with correct verb and values", () => {
    const sut = makeSut();
    const request = mockPostRequest();

    sut.post(request);

    expect(axios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it("should call axios with correct body", async () => {
    vi.mocked(axios.post).mockResolvedValueOnce(mockAxiosPostResult);

    const sut = makeSut();
    const request = mockPostRequest();
    const httpResponse = await sut.post(request);

    expect(httpResponse).toEqual({
      statusCode: mockAxiosPostResult.status,
      body: mockAxiosPostResult.data,
    });
  });
});
