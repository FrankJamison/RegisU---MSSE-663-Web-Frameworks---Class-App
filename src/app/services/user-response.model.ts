export interface AuthResponse {
  user: UserResponse;
  token: string;
}

export interface UserResponse {
  id: string;
  username: string;
  password: string;
  tokens: Token[];
}

interface Token {
  id: string;
  token: string;
}
