import { faker } from "@faker-js/faker";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { AxiosHttpClient } from "./axios-http-client";

vi.mock("axios");
const makeSut = () => new AxiosHttpClient();

describe("AxiosHttpClient", () => {
  it("should call axios with correct url and verb", () => {
    const sut = makeSut();
    const url = faker.internet.url();

    sut.post({ url, body: {} });
    expect(axios.post).toHaveBeenCalledWith(url);
  });
});
