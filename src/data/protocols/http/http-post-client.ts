type body = {
  email: string;
  password: string;
};

export interface HttpPostClient {
  post(url: string, body: body): Promise<void>;
}
