import { useCallback, useState } from "react";
import { getUser, updateUser } from "../services/api/getMembers";
import { User } from "../types";

const useSingleMember = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState<User | null>(null);

  const getMember = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getUser(id);
      setMember(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error fetching members');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const updateMember = useCallback(async (id: string, data: User) => {
    setLoading(true);
    setError(null);

    try {
      const updatedMember = await updateUser(id, data);
      
      setMember(updatedMember);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error fetching members');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { updateMember, getMember, member, loading, error };
};

export default useSingleMember;