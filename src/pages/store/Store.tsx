import { BiCartAdd } from 'react-icons/bi';
import PublicNavigation from '../../components/public/Navigation';
import SideNav from './components/SideNav';

export default function Store() {
	return (
		<>
			<PublicNavigation />
			<section className='w-full max-w-5xl px-10 mx-auto'>
				<h1 className='text-3xl font-bold mt-28'>Tienda</h1>
				<main className='grid grid-cols-12 gap-5 w-full'>
					<SideNav />
					<div className='col-span-9'>
						<div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5'>
							<div className='border border-zinc-600 rounded-xl'>
								<img
									src='https://placehold.co/200x200'
									alt='Camiseta'
									className='rounded-t w-full aspect-square'
								/>
								<div className='p-4'>
									<h1 className='font-bold text-3xl'>Remera</h1>
									<p>Remera de algodon</p>
									<p>Precio: $10</p>
									<div className='flex items-center space-x-2 mt-2'>
										<button className='btn btn-secondary flex-1'>
											Comprar
										</button>
										<button className='btn btn-primary'>
											<BiCartAdd size={24} />
										</button>
									</div>
								</div>
							</div>
							<div className='border border-zinc-600 rounded-xl'>
								<img
									src='https://placehold.co/200x200'
									alt='Camiseta'
									className='rounded-t w-full aspect-square'
								/>
								<div className='p-4'>
									<h1 className='font-bold text-3xl'>Remera polo</h1>
									<p>Remera tipo polo</p>
									<p>Precio: $10</p>
									<div className='flex items-center space-x-2 mt-2'>
										<button className='btn btn-secondary flex-1'>
											Comprar
										</button>
										<button className='btn btn-primary'>
											<BiCartAdd size={24} />
										</button>
									</div>
								</div>
							</div>
							<div className='border border-zinc-600 rounded-xl'>
								<img
									src='https://placehold.co/200x200'
									alt='Camiseta'
									className='rounded-t w-full aspect-square'
								/>
								<div className='p-4'>
									<h1 className='font-bold text-3xl'>Kepi</h1>
									<p>Kepi</p>
									<p>Precio: $10</p>
									<div className='flex items-center space-x-2 mt-2'>
										<button className='btn btn-secondary flex-1'>
											Comprar
										</button>
										<button className='btn btn-primary'>
											<BiCartAdd size={24} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</section>
		</>
	);
}
