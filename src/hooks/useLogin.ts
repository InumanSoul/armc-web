import { useState } from 'react';
import { loginUser } from '../useCases/authentication';
import { login } from '../services/api/authservices';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const [error, setError] = useState<null | string>(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const performLogin = async (identifier: string, password: string) => {
		setLoading(true);
		setError(null);

		try {
			await loginUser({ identifier, password }, { login });
			navigate('/app/profile');
		} catch (error: unknown) {
			if(error instanceof Error) {
				setError(error.message);
			} else {
				setError('Error performing login');
			}
			throw new Error(`${error instanceof Error ? error.message : error}`);
		} finally {
			setLoading(false);
		}
	};

	return { performLogin, loading, error };
};

export default useLogin;
