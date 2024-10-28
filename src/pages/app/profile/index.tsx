import { Link, useNavigate } from 'react-router-dom';
import Authenticated from '../../../components/Authenticated';
import { BiLogOut } from 'react-icons/bi';
import { IoImage } from 'react-icons/io5';
import MembershipCard from '../../../components/MembershipCard';
import useSingleMember from '../../../hooks/useSingleMember';
import { useEffect } from 'react';
import { formatDate, getYearsOld } from '../../../utils';

const Profile = () => {
	const navigate = useNavigate();
	const { getMember, member, loading, error } = useSingleMember();
	const userName = localStorage.getItem('username');

	useEffect(() => {
		getMember(userName as string);
	}, [getMember, userName]);

	console.log(member);
	

	const userFullName = `${member?.personalInfo.firstName} ${member?.personalInfo.lastName}`;

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/');
	};

	return (
		<section className='w-full max-w-3xl px-10 mx-auto mb-20'>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{member && (
				<div className='grid grid-cols-12 gap-5 w-full mt-16'>
          <div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
					  <div className='size-28 bg-zinc-500 rounded-full flex items-center justify-center'></div>

						<h1 className='font-bold text-3xl'>{userFullName}</h1>
						<p className='bg-amber-800 text-amber-300 rounded p-1 inline-flex'>@{member?.username}</p>
						<p>Email: {member?.email}</p>
						<p>Edad: {getYearsOld(member?.personalInfo.dateOfBirth)}</p>
					</div>

					<div className='col-span-12 md:col-span-6'>
						<MembershipCard name={userFullName} joinDate={member?.joinedDate} />
					</div>

					<div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
						<h2 className='font-bold text-3xl'>Información</h2>
            <p>Nombre: {member?.personalInfo.firstName}</p>
						<p>Apellido: {member?.personalInfo.lastName}</p>
            <p>Tipo de sangre: O+</p>
            <p>Fecha de nacimiento: {formatDate(member?.personalInfo.dateOfBirth)}</p>
						<p>Direccion: Fake street 123</p>
						{
							member?.emergencyContact && (
								<div className='mt-3'>
									<p>Contacto de emergencia</p>
									<div className='py-2 px-3 bg-zinc-700 rounded-lg'>
										<p className='text-lg font-bold'>{member?.emergencyContact?.name}</p>
										<p>Telefono: <span>{member?.emergencyContact.phone}</span></p>
										<p>Relación: <span>({member?.emergencyContact.relationship})</span></p>
									</div>
								</div>

							)
						}
					</div>
					<div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5 space-y-3'>
						<h2 className='text-3xl font-bold'>Motocicleta</h2>
            <div className='w-full h-28 bg-zinc-500 rounded-lg flex items-center justify-center'>
             <IoImage size={32} className='m-auto text-zinc-300' />
            </div>
            <div>
              <h4 className='font-bold text-xl'>Detalles</h4>
              <p>Marca: BMW</p>
              <p>Modelo: K 1600 GTL</p>
              <p>Año: 2012</p>
              <p>Chapa: BQW 123</p>
            </div>
					</div>
				</div>
			)}

			<div className='mt-5 flex items-center gap-2'>
				<Link to='/app/profile/edit' className='btn btn-secondary'>Editar perfil</Link>
				<button
					type='button'
					className='btn btn-danger-outline flex'
					onClick={handleLogout}>
					<BiLogOut size={24} className='mr-2' />
					Logout
				</button>
			</div>
		</section>
	);
};

const AuthenticatedProfile = Authenticated(Profile);
export default AuthenticatedProfile;
