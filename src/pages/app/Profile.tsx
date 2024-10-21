import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Authenticated from '../../components/Authenticated';

const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
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

const Profile = () => {
  const navigate = useNavigate();
	const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: '67112202ed5f426465e9a7c7' },
  });

  const userFullName = `${data?.getUser?.personalInfo.firstName} ${data?.getUser?.personalInfo.lastName}`;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

	return (
		<section className='w-full max-w-3xl px-10 mx-auto'>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && (
        <div className='grid grid-cols-12 gap-5 w-full mt-28'>
          <div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
            <h1 className='font-bold text-3xl'>{userFullName}</h1>
            <p>Usuario: {data.getUser.username}</p>
            <p>Email: {data.getUser.email}</p>
            <p>Nombre: {data.getUser.personalInfo.firstName}</p>
            <p>Apellido: {data.getUser.personalInfo.lastName}</p>
            <p>Edad: {data.getUser.personalInfo.age}</p>
            
            <div>
              <button className='btn btn-primary'>Edit profile</button>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
            <h1 className='font-bold text-3xl'>Informacion</h1>
            <p>Direccion: Fake street 123</p>
            <p>Ciudad: Fake city</p>
            <p>Contacto de emergencia: Ana Ramirez (Esposa)</p>
            
          </div>
          <div className='col-span-12 md:col-span-6 border border-zinc-600 rounded-xl p-5'>
            <p>
              Motocicleta
            </p>
            <p>Marca: BMW</p>
            <p>Modelo: K 1600 GTL</p>
            <p>Año: 2012</p>
            <p>Chapa: BQW 123</p>
          </div>
        </div>
			)}
      <button type='button' className='btn btn-secondary' onClick={handleLogout}>Exit</button>
		</section>
	);
}

const AuthenticatedProfile = Authenticated(Profile);
export default AuthenticatedProfile;
