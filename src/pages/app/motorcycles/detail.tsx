import { useParams } from "react-router-dom";

const MotorcycleDetail = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>{ id }</h1>
    </div>
  );
}

export default MotorcycleDetail;