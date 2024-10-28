import { createContext, ReactNode, useReducer } from 'react';
import { Product } from '../types';

interface CartState {
	items: Product[];
	totalPrice: number;
	totalItems: number;
	totalAmount: number;
}

interface CartAction {
	type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR';
	payload?: Product;
}

interface CartContextType {
	cartState: CartState;
	addItem: (item: Product) => void;
	removeItem: (item: Product) => void;
	clearCart: () => void;
}

const initialState: CartState = {
	items: [],
	totalItems: 0,
	totalPrice: 0,
	totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [...state.items, action.payload!],
				totalItems: state.totalItems + 1,
				totalPrice: state.totalPrice + action.payload!.price,
				totalAmount: state.totalAmount + 1,
			};
		case 'REMOVE_ITEM':
			return {
				...state,
				items: state.items.filter(
					(item) => item.documentId !== action.payload!.documentId
				),
				totalItems: state.totalItems - 1,
				totalPrice: state.totalPrice - action.payload!.price,
				totalAmount: state.totalAmount - 1,
			};
		case 'CLEAR':
			return initialState;
		default:
			return state;
	}
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartState, dispatch] = useReducer(cartReducer, initialState);

	const addItem = (item: Product) => {
		dispatch({ type: 'ADD_ITEM', payload: item });
	};

	const removeItem = (item: Product) => {
		dispatch({ type: 'REMOVE_ITEM', payload: item });
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR' });
	};

	return (
		<CartContext.Provider
			value={{
				cartState,
				addItem,
				removeItem,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
