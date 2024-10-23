import { LoginParams, LoginResponse, LoginService } from '../types';

export const loginUser = async (
	{ username, password }: LoginParams,
	loginService: LoginService
): Promise<LoginResponse> => {
	if (!username || !password) {
		throw new Error('username and password are required');
	}

	const { token, user } = await loginService.login(username, password);
	localStorage.setItem('token', token);
	
	return {
		token,
		user,
	};
};
