import { useEffect, useState } from "react";
import { Product } from "../types";
import { getSingleProduct } from "../services/api/getProducts";

const useSingleProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getSingleProduct(id);
        setProduct(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error fetching product");
        }
      }
    }

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}

export default useSingleProduct;