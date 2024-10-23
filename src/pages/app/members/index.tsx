import { User } from '../../../types';
import Authenticated from '../../../components/Authenticated';
import useMembers from '../../../hooks/useMembers';
import { formatDate } from '../../../utils';
import { Link } from 'react-router-dom';

const Members = () => {
	const { loading, members, error } = useMembers();

	console.log('members', members);

	return (
		<section className='container mt-20'>
			{error ? (
				<div className='w-full bg-red-500 text-white p-4 mb-4 rounded-xl'>
					{error}
				</div>
			) : null}
			<h1 className='text-3xl font-bold mb-10'>Miembros activos</h1>
			<header className='grid grid-cols-12 gap-5 mb-5'>
				<div className='flex gap-2 col-span-8'>
					<input type='text' placeholder='Buscar miembro' className='input' />
					<button className='btn btn-primary'>Buscar</button>
				</div>
				<select className='input col-span-4'>
					<option value='1'>Ordenar por nombre</option>
					<option value='2'>Ordenar por edad</option>
					<option value='3'>Ordenar por fecha de ingreso</option>
				</select>
			</header>
			<table className='w-full'>
				<thead>
					<tr className='border-b border-zinc-700'>
						<th className='px-3 py-1 text-left'>Nombre</th>
						<th className='px-3 py-1 text-left'>Edad</th>
						<th className='px-3 py-1 text-left'>Ingreso</th>
						<th className='px-3 py-1 text-left'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{!loading && members && members?.length > 0 ? (
						members?.map((user: User) => (
							<tr key={user.id} className='hover:bg-zinc-700'>
								<td className='px-3 py-4'>
									{user.personalInfo.firstName} {user.personalInfo.lastName}
								</td>
								<td className='px-3 py-4'>{formatDate(user.personalInfo.dateOfBirth)}</td>
								<td className='px-3 py-4'>2020-01-01</td>
								<td className='px-3 py-4'>
									<Link to={`/app/members/${user.id}`} className='btn btn-secondary btn-sm'>Ver perfil</Link>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={4} className='text-center py-4'>
								No hay miembros activos
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</section>
	);
}

const AuthMembers = Authenticated(Members);
export default AuthMembers;