import { BiNews } from 'react-icons/bi';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { PiMotorcycleFill, PiUsersFourFill } from 'react-icons/pi';
import { TbHomeFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const linkBaseClass =
		'px-3 py-2 flex flex-col items-center gap-1 text-zinc-400';
	const linkActiveClass =
		'px-3 py-2 flex flex-col items-center gap-1 text-white';

	return (
		<nav className='w-full mx-auto'>
			<ul className='flex gap-5 justify-around px-6'>
				<li>
					<NavLink
						to='/app/home'
						className={({ isActive }) =>
							`${isActive ? linkActiveClass : linkBaseClass}`
						}>
						<TbHomeFilled size={24} />
						<p className='text-xs'>Inicio</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/app/events'
						className={({ isActive }) =>
							`${isActive ? linkActiveClass : linkBaseClass}`
						}>
						<BiNews size={24} />
						<p className='text-xs'>Eventos</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/app/members'
						className={({ isActive }) =>
							`${isActive ? linkActiveClass : linkBaseClass}`
						}>
						<PiUsersFourFill size={24} />
						<p className='text-xs'>Miembros</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/app/motorcycles'
						className={({ isActive }) =>
							`${isActive ? linkActiveClass : linkBaseClass}`
						}>
						<PiMotorcycleFill size={24} />
						<p className='text-xs'>Motos</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/app/profile'
						className={({ isActive }) =>
							`${isActive ? linkActiveClass : linkBaseClass}`
						}>
						<GiFullMotorcycleHelmet size={24} />
						<p className='text-xs'>Perfil</p>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
