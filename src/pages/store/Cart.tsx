const Cart = () => {
	return (
		<div className="container py-20">
			<h1 className="text-2xl font-bold">Carrito de compras</h1>
			<ul className="space-y-4">
				<li>
					<h3>Producto</h3>
					<p>
						$ 120.000
					</p>
				</li>
				<li>
					<h3>Producto</h3>
					<p>
						$ 120.000
					</p>
				</li>
				<li>
					<h3>Producto</h3>
					<p>
						$ 120.000
					</p>
				</li>
			</ul>
			<div className="border-t border-zinc-600">
				<h3>Total</h3>
				<p className="font-bold">$ 100.00</p>
			</div>
			<button className="btn btn-primary">Realizar pedido</button>
		</div>
	);
};

export default Cart;
