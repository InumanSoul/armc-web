import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { PiMotorcycleFill, PiUsersFourFill } from "react-icons/pi";

const Navigation = () => {
	return (
		<nav>
			<ul className='flex gap-5'>
				<li>
					<a href='/app/profile' className='px-3 py-2 flex flex-col items-center gap-1'>
						<GiFullMotorcycleHelmet size={24} />
						<p className="text-sm">Perfil</p>
					</a>
				</li>
				<li>
					<a href='/app/members' className='px-3 py-2 flex flex-col items-center gap-1'>
						<PiUsersFourFill size={24} />
						<p className="text-sm">Miembros</p>
					</a>
				</li>
				<li>
					<a href='/app/motorcycles' className='px-3 py-2 flex flex-col items-center gap-1'>
						<PiMotorcycleFill size={24} />
						<p className="text-sm">Motos</p>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
