import { useParams } from "react-router-dom";
import useSingleProduct from "../../../hooks/useSingleProduct";

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, loading, error } = useSingleProduct(slug as string);

  return (
    <div>
      <h1>Product Detail</h1>
      {
        !loading && !error && product ? (
          <div>
            <h2 className="font-bold text-3xl">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-amber-500">${product.price}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
}