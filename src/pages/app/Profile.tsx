import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

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

export default function Profile() {
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
          <div className='col-span-12 md:col-span-6 border border-gray-600 rounded-xl p-5'>
            <h1 className='font-bold text-3xl'>{userFullName}</h1>
            <p>Username: {data.getUser.username}</p>
            <p>Email: {data.getUser.email}</p>
            <p>First name: {data.getUser.personalInfo.firstName}</p>
            <p>Last name: {data.getUser.personalInfo.lastName}</p>
            <p>Age: {data.getUser.personalInfo.age}</p>
            
            <div>
              <button className='btn btn-primary'>Edit profile</button>
              <button type='button' className='btn btn-outline-white' onClick={handleLogout}>Exit</button>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 border border-gray-600 rounded-xl p-5'>
            <p>
              Motorcycle:
            </p>
          </div>
        </div>
			)}
		</section>
	);
}
