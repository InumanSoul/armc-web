import { useParams } from 'react-router-dom';
import useSingleProduct from '../../../hooks/useSingleProduct';
import PublicNavigation from '../../../components/public/Navigation';

export const ProductDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const { product, loading, error } = useSingleProduct(slug as string);

	return (
		<>
      <PublicNavigation />
			<section className='container'>
				{!loading && !error && product ? (
					<div>
            <img src={product.photos[0].url ?? 'https://placehold.co/400'} alt={product.name} className='w-full h-96 object-cover' />
						<h2 className='font-bold text-3xl'>{product.name}</h2>
						<p className='my-5'>{product.description}</p>
						<p className='text-amber-500 text-bold'>${product.price}</p>
            <button className='btn btn-secondary'>Agregar al carrito</button>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</section>
		</>
	);
};
