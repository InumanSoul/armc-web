import { BiCartAdd } from 'react-icons/bi';
import { formatCurrency } from '../../../utils';

interface ProductProps {
	image: string;
	name: string;
	description: string;
	price: number;
}

const ProductListItem = ({ product }: { product: ProductProps }) => {
	return (
		<div className='border border-zinc-600 rounded-xl'>
			<img
				src={product.image}
				alt={product.name}
				className='rounded-t w-full aspect-square'
			/>
			<div className='p-4'>
				<h3 className='font-bold text-lg'>{product.name}</h3>
				<p className='text-zinc-400'>{product.description}</p>
				<p className='text-amber-500'>
					{formatCurrency(product.price)}
				</p>
				<div className='flex items-center space-x-2 mt-2'>
					<button className='btn btn-secondary flex-1'>Comprar</button>
					<button className='btn btn-primary'>
						<BiCartAdd size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductListItem;
