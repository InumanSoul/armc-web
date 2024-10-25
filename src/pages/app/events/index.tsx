import Authenticated from "../../../components/Authenticated";
import useEvents from "../../../hooks/useEvents";
import EventsList from "./components/EventsList";

const Events = () => {
  const { events, loading, error } = useEvents();

  return (
    <section className="container mt-20 mb-20">
      <h1 className="text-3xl font-bold mb-8">Eventos</h1>
      {
        events.length >= 0  && !loading && !error ? (
          <EventsList events={events} />
        ) : (
          <p>No hay eventos disponibles...</p>
        )
      }
    </section>
  );
}

const AuthEvents = Authenticated(Events);
export default AuthEvents;