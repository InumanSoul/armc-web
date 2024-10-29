import { BiCart, BiLogIn, BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import useCart from '../../hooks/useCart';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const PublicNavigation = () => {
	const token = localStorage.getItem('token');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { totalItems } = useCart();

	return (
		<header className='w-full flex justify-between px-10 py-2 items-center sticky top-0 backdrop-blur-md bg-black/70'>
			<nav className={`absolute w-full h-dvh bg-black top-[108px] left-0 ${isMenuOpen ? 'translate-x-[-100%]' : 'translate-x-0'} duration-200 p-10 md:translate-x-0 md:p-0 md:top-auto md:bg-transparent md:relative md:w-auto md:h-auto`}>
				<ul className='flex flex-col md:flex-row gap-4'>
					<NavigationItem item='Inicio' to='/' />
					<NavigationItem item='Nosotros' to='/about' />
					<NavigationItem item='Contacto' to='/contact' />
					<NavigationItem item='Tienda' to='/store' />
				</ul>
			</nav>
			<div className='flex'>
				<button type='button' className='btn btn-ghost block md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{
						isMenuOpen ? <BiMenu size={24} /> : <IoMdClose size={24} />
					}
				</button>
				<Link to={'/'}>
					<img src='/logo.png' alt='Logo' className='w-20' />
				</Link>
			</div>
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
						<Link to='/register' className='btn btn-secondary hidden md:block'>
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
