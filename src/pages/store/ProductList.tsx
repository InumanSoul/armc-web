import { productsList } from "./mock/products";
import ProductListItem from "./components/ProductListItem";

const ProductList = () => {
	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5'>
      {
        productsList.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))
      }
		</div>
	);
};

export default ProductList;