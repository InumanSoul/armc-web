import { useEffect, useState } from "react";
import { getEvents } from "../services/api/getEvents";
import { EventProp } from "../types";

const useEvents = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<EventProp[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error fetching events");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return { events, loading, error };
}

export default useEvents;