import { useEffect, useState } from "react";
import { getMotorcycles } from "../services/api/getMotorcycles";
import { Motorcycle } from "../types";

const useMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMotorcycles();
        
        setMotorcycles(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])


  return {
    motorcycles,
    loading,
    error
  };
}

export default useMotorcycles;