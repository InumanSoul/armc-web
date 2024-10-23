import { BiArrowBack } from 'react-icons/bi';
import Authenticated from '../../../components/Authenticated';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useSingleMember from '../../../hooks/useSingleMember';
import { formatDate } from '../../../utils';

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
					<h1 className='text-3xl font-bold'>
						{member?.personalInfo.firstName} {member?.personalInfo.lastName}
					</h1>
					<p className='text-lg text-zinc-500'>
						{formatDate(member?.personalInfo.dateOfBirth)}
					</p>
					<p>
						{
              member?.personalInfo.bio || 'No hay información disponible'
            }
					</p>
				</>
			) : (
				<p>No se encontro el usuario...</p>
			)}
		</section>
	);
};

const AuthMemberDetail = Authenticated(MemberDetail);
export default AuthMemberDetail;
