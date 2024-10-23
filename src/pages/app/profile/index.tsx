import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Authenticated from '../../../components/Authenticated';
import { BiLogOut } from 'react-icons/bi';
import { IoImage } from 'react-icons/io5';
import MembershipCard from '../../../components/MembershipCard';

const GET_USER = gql`
	query GetUser($id: ID!) {
		getUser(id: $id) {
			id
			username
			email
			personalInfo {
				firstName
				lastName
				dateOfBirth
			}
			motorcycles {
				brand
				model
				year
			}
		}
	}
`;

const Profile = () => {
	const navigate = useNavigate();
	const { loading, error, data } = useQuery(GET_USER, {
		variables: { id: '67112202ed5f426465e9a7c7' },
	});

	const userFullName = `${data?.getUser?.personalInfo.firstName} ${data?.getUser?.personalInfo.lastName}`;

	const handleLogout = () => {
		localStorage.removeItem('token');
		navigate('/');
	};

	return (
		<section className='w-full max-w-3xl px-10 mx-auto mb-20'>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && (
				<div className='grid grid-cols-12 gap-5 w-full mt-16'>
          <div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
					  <div className='size-28 bg-zinc-500 rounded-full flex items-center justify-center'></div>

						<h1 className='font-bold text-3xl'>{userFullName}</h1>
						<p className='bg-amber-800 text-amber-300 rounded p-1 inline-flex'>@{data.getUser.username}</p>
						<p>Email: {data.getUser.email}</p>
						<p>Edad: {data.getUser.personalInfo.age} años</p>
					</div>

					<div className='col-span-12 md:col-span-6'>
						<MembershipCard name={userFullName} joinDate={'08/10/2019'} />
					</div>

					<div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
						<h2 className='font-bold text-3xl'>Información</h2>
            <p>Nombre: {data.getUser.personalInfo.firstName}</p>
						<p>Apellido: {data.getUser.personalInfo.lastName}</p>
            <p>Tipo de sangre: O+</p>
            <p>Fecha de nacimiento: 14/09/1997</p>
						<p>Direccion: Fake street 123</p>
            <div className='mt-3'>
						  <p>Contacto de emergencia: </p>
              <div className='py-2 px-3 bg-zinc-700 rounded-lg'>
                <p className='text-lg font-bold'>Ana Ramirez</p>
                <p>Relación: <span>(Esposa)</span></p>
              </div>
            </div>
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
				<a href='/app/profile/edit' className='btn btn-secondary'>Editar perfil</a>
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
