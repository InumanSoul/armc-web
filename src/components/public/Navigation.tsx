import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PublicNavigation = () => {
  const token = localStorage.getItem('token');

	return (
		<header className='w-full flex justify-between px-10 py-2 border-b border-b-zinc-700 items-center sticky top-0 backdrop-blur-xl bg-zinc-800'>
			<nav className='hidden md:block'>
				<ul className='flex gap-4'>
					<li>
						<Link to='/'>Inicio</Link>
					</li>
					<li>
						<Link to='/about'>Nosotros</Link>
					</li>
					<li>
						<Link to='/contact'>Contacto</Link>
					</li>
					<li>
						<Link to='/store'>Tienda</Link>
					</li>
				</ul>
			</nav>
			<Link to={'/'}>
				<img src='/logo.png' alt='Logo' className='w-16' />
			</Link>
			<div className='flex gap-2'>
				{
          token ? (
            <Link to ='/app/profile' className='btn btn-primary'>
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
          )
        }
			</div>
		</header>
	);
};

export default PublicNavigation;
