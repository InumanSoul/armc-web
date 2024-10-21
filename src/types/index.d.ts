export type User = {
  id: string;
  username: string;
  email: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    age: number;
  };
  motorcycles: {
    make: string;
    model: string;
    year: number;
  }[];
}

export interface LoginParams {
	username: string;
	password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface LoginService {
	login(username: string, password: string): Promise<LoginResponse>;
}