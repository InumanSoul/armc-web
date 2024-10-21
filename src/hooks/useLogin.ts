import { useState } from 'react';
import { loginUser } from '../useCases/authentication';
import { login } from '../services/api/authservices';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const [error, setError] = useState<null | unknown>(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const performLogin = async (username: string, password: string) => {
		setLoading(true);
		setError(null);

		try {
			await loginUser({ username, password }, { login });
			console.log('inside useLogin');
			navigate('/app/profile');
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return { performLogin, loading, error };
};

export default useLogin;
