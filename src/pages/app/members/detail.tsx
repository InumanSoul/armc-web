import { BiArrowBack } from 'react-icons/bi';
import Authenticated from '../../../components/Authenticated';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useSingleMember from '../../../hooks/useSingleMember';
import { formatDate, getYearOnly } from '../../../utils';

const MemberDetail = () => {
	const { getMember, member, loading, error } = useSingleMember();
	const { id } = useParams();

	useEffect(() => {
		if (!id) return;
		getMember(id);
	}, [getMember, id]);

	return (
		<section className='container mt-20'>
			<Link to='/app/members' className='text-zinc-400 flex gap-2 mb-5'>
				<BiArrowBack size={24} />
				Volver
			</Link>
			{member && !loading && !error ? (
				<>
					<div className='size-28 bg-zinc-600 rounded-full mb-5'></div>
					<h1 className='text-3xl font-bold'>
						{member?.personalInfo.firstName} {member?.personalInfo.lastName}
					</h1>
					<p className='my-2'>
						{
              member?.personalInfo.bio || 'No hay información disponible'
            }
					</p>
					<div className='border border-zinc-600 rounded-xl p-5'>
						<p>
							Fecha de nacimiento: {formatDate(member?.personalInfo.dateOfBirth)}
						</p>
						<p>
							Email: {member?.email || 'No hay información disponible'}
						</p>
						<p>
							Teléfono: {member?.personalInfo.phone || 'No hay información disponible'}
						</p>
						<p>
							Dirección: {member?.personalInfo.address || 'No hay información disponible'}
						</p>
					</div>
					
					<h2 className='text-xl font-bold mt-10'>Motos</h2>
					{member?.motorcycles && member?.motorcycles.length > 0 ? (
						<ul>
							{member?.motorcycles.map((moto) => (
								<li key={moto.documentId}>
									{moto.brand} {moto.model} {getYearOnly(moto.year)}
								</li>
							))}
						</ul>
					) : (
						<p>No hay motos registradas...</p>
					)}
				</>
			) : (
				<p>No se encontro el usuario...</p>
			)}
		</section>
	);
};

const AuthMemberDetail = Authenticated(MemberDetail);
export default AuthMemberDetail;
