export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface HttpPostClient {
  post(url: string, body: AuthenticationParams): Promise<void>;
}
