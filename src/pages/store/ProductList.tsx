import ProductListItem from "./components/ProductListItem";
import { Product } from "../../types";

const ProductList = ({
  products
}: { products: Product[]}) => {
	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5'>
      {
        products.map((product) => (
          <ProductListItem key={product.documentId} product={product} />
        ))
      }
		</div>
	);
};

export default ProductList;