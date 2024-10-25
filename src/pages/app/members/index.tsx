import { User } from '../../../types';
import Authenticated from '../../../components/Authenticated';
import { formatDate } from '../../../utils';
import { Link } from 'react-router-dom';
import useMembers from '../../../hooks/useMembers';

const Members = () => {
	const { loading, members, error } = useMembers();

	return (
		<section className='container mt-20'>
			{error ? (
				<div className='w-full bg-red-500 text-white p-4 mb-4 rounded-xl'>
					{error}
				</div>
			) : null}
			<h1 className='text-3xl font-bold mb-10'>Miembros activos</h1>
			<header className='grid grid-cols-12 gap-5 mb-5'>
				<div className='flex gap-2 col-span-12 md:col-span-8'>
					<input type='search' placeholder='Buscar miembros' className='input' />
				</div>
				<div className='flex items-center gap-2 col-span-12 md:col-span-4'>
					<select className='input'>
						<option value='byName'>Ordenar por nombre</option>
						<option value='byAge'>Ordenar por edad</option>
						<option value='byDate'>Ordenar por fecha de ingreso</option>
					</select>
					<select className='input'>
						<option value='all'>Ver todos</option>
						<option value='full'>Miembros oficiales</option>
						<option value='prospect'>Prospectos</option>
					</select>
				</div>
			</header>
			<table className='w-full flex flex-row sm:table rounded-lg overflow-hidden my-5'>
				<thead>
					<tr className='border-b border-zinc-700 hidden sm:table-row'>
						<th className='px-3 py-1 text-left'>Nombre</th>
						<th className='px-3 py-1 text-left'>Edad</th>
						<th className='px-3 py-1 text-left'>Ingreso</th>
						<th className='px-3 py-1 text-left'>Acciones</th>
					</tr>
				</thead>
				<tbody className='w-full'>
					{!loading && members && members?.length > 0 ? (
						members?.map((user: User) => (
							<tr key={user.documentId} className='hover:bg-zinc-800 duration-200 flex flex-col w-full sm:table-row mb-2 sm:mb-0 border border-zinc-600 p-5 md:p-0 rounded-lg md:border-none'>
								<td className='md:px-3 md:py-4 font-bold'>
									{user.personalInfo.firstName} {user.personalInfo.lastName}
								</td>
								<td className='md:px-3 md:py-4'>{formatDate(user.personalInfo.dateOfBirth)}</td>
								<td className='md:px-3 md:py-4'>2020-01-01</td>
								<td className='md:px-3 md:py-4'>
									<Link to={`/app/members/${user.username}`} className='btn btn-secondary btn-sm'>Ver perfil</Link>
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