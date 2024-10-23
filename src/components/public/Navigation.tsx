import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';

const PublicNavigation = () => {
	const token = localStorage.getItem('token');

	return (
		<header className='w-full flex justify-end md:justify-between px-5 md:px-10 py-2 items-center sticky top-0 backdrop-blur-md bg-black/70'>
			<nav className='hidden md:block'>
				<ul className='flex gap-4'>
					<NavigationItem item='Inicio' to='/' />
					<NavigationItem item='Nosotros' to='/about' />
					<NavigationItem item='Contacto' to='/contact' />
					<NavigationItem item='Tienda' to='/store' />
				</ul>
			</nav>
			<Link to={'/'} className='absolute top-2 md:right-1/2 right-3/4 translate-x-0 md:translate-x-1/2'>
				<img src='/logo.png' alt='Logo' className='w-16 md:w-20' />
			</Link>
			<div className='flex gap-2'>
				{token ? (
					<Link to='/app/profile' className='btn btn-primary'>
						Mi perfil
					</Link>
				) : (
					<>
						<Link to='/register' className='btn btn-secondary'>
							Unirse
						</Link>
						<Link to='/login' className='btn btn-primary-outline flex'>
							<BiLogIn size={24} className='mr-1' />
							Ingresar
						</Link>
					</>
				)}
			</div>
		</header>
	);
};

export default PublicNavigation;
