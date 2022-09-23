import { faker } from "@faker-js/faker";
import { AuthenticationParams } from "../../data/protocols/http/http-post-client";

export const MockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
