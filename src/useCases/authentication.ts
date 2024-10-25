import { LoginParams, LoginResponse, LoginService } from '../types';

export const loginUser = async (
	{ identifier, password }: LoginParams,
	loginService: LoginService
): Promise<LoginResponse> => {
	if (!identifier || !password) {
		throw new Error('username and password are required');
	}
	
	const { jwt, user } = await loginService.login(identifier, password);
	localStorage.setItem('token', jwt);
	
	return {
		jwt,
		user,
	};
};
