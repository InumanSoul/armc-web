import PublicNavigation from '../../components/public/Navigation';
import useProducts from '../../hooks/useProducts';
import SideNav from './components/SideNav';
import ProductList from './ProductList';

export default function Store() {
	const { products, loading, error } = useProducts();

	return (
		<>
			<PublicNavigation />
			<header className='bg-gradient-to-tl from-zinc-800 to-zinc-900 py-12 w-full mb-12'>
				<div className='container'>
					<h1 className='text-3xl font-bold'>Tienda oficial Angeles Rebeldes</h1>
					<p className='text-zinc-400'>
						Salí a Rodar con estilo, productos oficiales de Angeles Rebeldes.
					</p>
				</div>
			</header>
			<section className='w-full max-w-5xl px-10 mx-auto pb-20'>
				<main className='grid grid-cols-12 gap-5 w-full'>
					<SideNav />
					<div className='col-span-9'>
						{
							products.length === 0 && !loading && !error ? (
								<ProductList products={products} />
							) : (
								<p>No hay productos disponibles...</p>
							)
						}
					</div>
				</main>
			</section>
		</>
	);
}
