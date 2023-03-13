import { HttpPostClientParams } from "@/data/protocols/http";
import { faker } from "@faker-js/faker";

export const mockPostRequest = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.name.firstName(),
    email: faker.internet.email(),
  },
});

export const mockAxiosPostResult = {
  status: faker.random.numeric(),
  data: {
    name: faker.name.firstName(),
    email: faker.internet.email(),
  },
};
