import { Link } from 'react-router-dom';
import PublicNavigation from '../components/public/Navigation';

export default function Home() {
	return (
		<>
			<PublicNavigation />
			<section className='w-full h-[calc(100dvh-90px)] -mt-[90px] bg-zinc-900 text-zinc-50 flex items-center justify-center bg-hero-home bg-cover bg-center'>
				<div className='flex flex-col gap-2 text-center'>
					<h1 className='text-5xl md:text-8xl font-bold'>Angeles Rebeldes MC</h1>
					<p className='text-2xl'>Hermandad Paraguay, 2009</p>
					<div className='space-x-2 mt-5'>
						<Link to={'/register'} className='btn btn-primary'>
							Unite
						</Link>
						<Link to={'/contact'} className='btn btn-white-outline'>
							Contacto
						</Link>
					</div>
				</div>
			</section>
			<section className='container py-28'>
				<div className='grid grid-cols-12 gap-5 items-center'>
					<div className='col-span-12 md:col-span-6'>
						<h2 className='font-bold text-2xl'>Quienes somos</h2>
						<p className='mb-5'>
							Somos una hermandad de motociclistas que comparten la pasión por
							las motos y la libertad de rodar por las rutas del país.
						</p>
						<Link to={'/about'} className='btn btn-secondary mt-5'>
							Conocenos
						</Link>
					</div>
					<div className='col-span-12 md:col-span-6'>
						<img
							src='/about-us.jpg'
							alt='Angeles Rebeldes MC'
							className='w-full rounded-xl'
						/>
					</div>
				</div>
			</section>
			<section className='container mb-10'>
				<div className='w-full bg-gradient-to-br from-amber-600 to-amber-900 rounded-xl p-12'>
					<h2 className='font-bold text-2xl'>Contacta-nos</h2>
					<p className='mb-5'>
						¿Tienes alguna duda o consulta? No dudes en contactarnos a través de
						nuestro formulario de contacto.
					</p>
					<Link to={'/contact'} className='btn btn-white-outline mt-5'>
						Contacto
					</Link>
				</div>
			</section>
			<footer className='border-t border-zinc-600'>
				<div className='container'>
					<p className='text-zinc-50 text-center py-5'>
						© 2021 Angeles Rebeldes MC
					</p>
				</div>
			</footer>
		</>
	);
}
