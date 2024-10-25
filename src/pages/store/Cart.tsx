import { BiTrash } from "react-icons/bi";
import PublicNavigation from "../../components/public/Navigation";
import useShoppingCart, { Item } from "../../hooks/useShoppingCart";
import { formatCurrency } from "../../utils";

const Cart = () => {
	const { shoppingCart, totalAmmount, removeItem } = useShoppingCart();

	const handleRemove = (item: Item) => {
		removeItem(item);
	}

	return (
		<>
			<PublicNavigation />
			<div className="container py-20">
			<h1 className="text-2xl font-bold">Carrito de compras</h1>
			<ul className="space-y-4 py-3">
				{
					shoppingCart.length === 0 ? (
						<p>No hay productos en el carrito...</p>
					) :
					shoppingCart.map((item: Item) => (
						<li key={item.id} className="flex justify-between">
							<h3>{item.name}</h3>
							<div className="flex items-center gap-3">
							<p>
								{formatCurrency(item.price)}
							</p>
							<button className="btn btn-danger" onClick={() => handleRemove(item)}>
								<BiTrash size={24} />
							</button>
							</div>
						</li>
					))
				}
			</ul>
			<div className="border-t border-zinc-600 py-3 flex justify-between">
				<h3>Total</h3>
				<p className="font-bold text-lg">
					{formatCurrency(totalAmmount)}
				</p>
			</div>
			<button className="btn btn-primary">Realizar pedido</button>
		</div>
		</>
	);
};

export default Cart;
