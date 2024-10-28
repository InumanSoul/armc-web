import { BiCartAdd } from 'react-icons/bi';
import { formatCurrency } from '../../../utils';
import { Product } from '../../../types';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import { API_URI } from '../../../utils/constants';

const ProductListItem = ({ product }: { product: Product }) => {
	const { addItem } = useCart();

	const handleClick = () => {
		addItem(product);
	};

	return (
		<div className='border border-zinc-600 rounded-xl'>
			<Link to={product.slug}>
				<img
					src={
						product.photos[0]?.url
							? `${API_URI}${product.photos[0]?.url}`
							: 'https://placehold.co/300'
					}
					alt={product.name}
					className='rounded-t w-full aspect-square'
				/>
			</Link>
			<div className='p-4'>
				<h3 className='font-bold text-lg'>{product.name}</h3>
				<p className='text-zinc-400'>{product.description}</p>
				<p className='text-amber-500'>{formatCurrency(product.price)}</p>
				<div className='flex items-center space-x-2 mt-2'>
					<button className='btn btn-secondary flex-1'>Comprar</button>
					<button
						type='button'
						className='btn btn-primary'
						onClick={handleClick}>
						<BiCartAdd size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductListItem;
