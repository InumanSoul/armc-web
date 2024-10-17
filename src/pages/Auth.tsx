import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState(true);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/app/profile');
	}

	useEffect(() => {
		if (username && password) {
			setIsValid(false);
		} else {
			setIsValid(true);
		}
	}, [username, password]);

	return (
		<section className='w-full h-dvh bg-gray-900 text-gray-50 flex items-center justify-center'>
			<form className='space-y-4 border border-gray-800 bg-gray-700 p-8 rounded-xl w-full max-w-md' onSubmit={handleSubmit}>
				<h1 className='text-3xl font-bold'>Area de miembros</h1>
				<div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='username'>
						Usuario
					</label>
					<input
						type='username'
						placeholder='Username'
						className='input'
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='password'>
						Password
					</label>
					<input
						type='password'
						placeholder='Password'
						className='input'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-primary btn-block' disabled={isValid}>
					Login
				</button>
			</form>
		</section>
	);
}
