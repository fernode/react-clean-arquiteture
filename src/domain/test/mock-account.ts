import { faker } from "@faker-js/faker";
import { AccountModel } from "../model";
import { AuthenticationParams } from "../usecases/authentication";

export const MockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const MockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
  name: faker.name.firstName(),
});
