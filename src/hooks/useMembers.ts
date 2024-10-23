import { useEffect, useState } from "react";
import { User } from "../types";
import { getUsers } from "../services/api/getMembers";

const useMembers = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<User[] | null>(null);
  
  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      setError(null);

      try {
        const users = await getUsers();
        
        setMembers(users);
      } catch (error: unknown) {
        console.error('error', error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Error fetching members');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [])
  
  return { members, loading, error };
}

export default useMembers;