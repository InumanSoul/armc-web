import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <h1>Product Detail</h1>
      {
        slug
      }
    </div>
  );
}