import { BiCart, BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import useCart from '../../hooks/useCart';

const PublicNavigation = () => {
	const token = localStorage.getItem('token');
	const { totalItems } = useCart();

	return (
		<header className='w-full flex justify-between px-10 py-2 items-center sticky top-0 backdrop-blur-md bg-black/70'>
			<nav className='hidden md:block'>
				<ul className='flex gap-4'>
					<NavigationItem item='Inicio' to='/' />
					<NavigationItem item='Nosotros' to='/about' />
					<NavigationItem item='Contacto' to='/contact' />
					<NavigationItem item='Tienda' to='/store' />
				</ul>
			</nav>
			<Link to={'/'}>
				<img src='/logo.png' alt='Logo' className='w-20' />
			</Link>
			<div className='flex gap-2'>
				<Link to='/cart' className='btn relative'>
					<span className='bg-red-500 rounded-full absolute top-0 right-0 text-xs size-6 flex items-center justify-center'>{totalItems}</span>
					<BiCart size={24} />
				</Link>
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
