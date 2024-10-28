import { BiTrash } from "react-icons/bi";
import PublicNavigation from "../../components/public/Navigation";
import useCart from "../../hooks/useCart";
import { formatCurrency } from "../../utils";
import { Product } from "../../types";

const Cart = () => {
	const { totalAmount, removeItem, cart } = useCart();

	const handleRemove = (item: Product) => {
		if (!item) return;
		removeItem(item);
	}

	return (
		<>
			<PublicNavigation />
			<div className="container py-20">
			<h1 className="text-2xl font-bold">Carrito de compras</h1>
			<ul className="space-y-4 py-3">
				{
					cart?.length === 0 ? (
						<p>No hay productos en el carrito...</p>
					) :
					cart?.map((item: Product) => (
						<li key={item.documentId} className="flex justify-between">
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
					{formatCurrency(totalAmount ?? 0)}
				</p>
			</div>
			<button className="btn btn-primary">Realizar pedido</button>
		</div>
		</>
	);
};

export default Cart;
