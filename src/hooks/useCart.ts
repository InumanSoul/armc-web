import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
	const context = useContext(CartContext)

	return {
		totalItems: context?.cartState?.totalItems,
		totalAmount: context?.cartState?.totalAmount,
		removeItem: context?.removeItem,
		addItem: context?.addItem,
		cart: context?.cartState?.items,
	};
};

export default useCart;
