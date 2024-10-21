import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

export default function Auth() {
	const { performLogin, loading, error } = useLogin();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await performLogin(username, password);
	}

	useEffect(() => {
		if (username && password) {
			setIsValid(false);
		} else {
			setIsValid(true);
		}
	}, [username, password]);

	return (
		<section className='w-full h-dvh bg-zinc-900 text-zinc-50 flex flex-col items-center justify-center'>
			<Link to={'/'}>
				<img src='/logo.png' alt='Logo' className='w-28 mb-12' />
			</Link>
			<form className='space-y-4 border border-zinc-800 bg-zinc-700 p-8 rounded-xl w-full max-w-md' onSubmit={handleSubmit}>
				<h1 className='text-3xl font-bold'>Area de miembros</h1>
					{
					error ? (
							<div className='w-full bg-red-500 text-white p-4 mb-4 rounded-xl'>
								{error.message}
							</div>
						) : null
					}
				<div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='username'>
						Usuario
					</label>
					<input
						type='text'
						name='username'
						id='username'
						value={username}
						placeholder='Username'
						autoComplete='off'
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
						name='password'
						id='password'
						value={password}
						placeholder='Password'
						className='input'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-primary btn-block' disabled={isValid && !loading}>
					Login
				</button>
			</form>
		</section>
	);
}
