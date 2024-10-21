import { gql, useQuery } from '@apollo/client';
import { User } from '../../types';
import Authenticated from '../../components/Authenticated';

const GET_MEMBERS = gql`
	query GetMembers {
		getUsers {
			id
			username
			email
			personalInfo {
				firstName
				lastName
				age
			}
			motorcycles {
				make
				model
				year
			}
		}
	}
`;

const Members = () => {
	const { loading, data } = useQuery(GET_MEMBERS);

	return (
		<section className='w-full max-w-3xl mx-auto'>
			<h1 className='text-3xl font-bold mb-10 mt-28'>Miembros activos</h1>
			<table className='w-full'>
				<thead>
					<tr className='border-b border-zinc-700'>
						<th className='px-3 py-1 text-left text-lg'>Nombre</th>
						<th className='px-3 py-1 text-left text-lg'>Edad</th>
						<th className='px-3 py-1 text-left text-lg'>Fecha de ingreso</th>
						<th className='px-3 py-1 text-left text-lg'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{!loading && data?.getUsers.length > 0 ? (
						data.getUsers.map((user: User) => (
							<tr key={user.id} className='hover:bg-zinc-700'>
								<td className='px-3 py-4'>
									{user.personalInfo.firstName} {user.personalInfo.lastName}
								</td>
								<td className='px-3 py-4'>{user.personalInfo.age}</td>
								<td className='px-3 py-4'>2020-01-01</td>
								<td className='px-3 py-4'>
									<button className='btn btn-primary btn-sm'>Ver perfil</button>
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