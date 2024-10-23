import { Link } from "react-router-dom";
import Authenticated from "../../../components/Authenticated";
import { CgCalendar } from "react-icons/cg";

const Events = () => {
  return (
    <section className="container mt-20">
      <h1 className="text-3xl font-bold mb-8">Eventos</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
        <li>
          <Link to="/app/events/event-sample">
            <img src="https://placehold.co/512x320" alt="Evento ejemplo" className="w-full object-contain mb-4 rounded-lg" />
            <h2 className="text-xl font-bold">Evento #123456</h2>
            <p className="text-zinc-400 inline-flex items-center">
              <CgCalendar size={24} className="inline-block mr-2" />
              12/12/2024 - 12:00 PM
            </p>
          </Link>
        </li>
        <li>
          <Link to="/app/events/event-sample-2">
            <img src="https://placehold.co/512x320" alt="Evento ejemplo" className="w-full object-contain mb-4 rounded-lg" />
            <h2 className="text-xl font-bold">Evento #123456</h2>
            <p className="text-zinc-400 inline-flex items-center">
              <CgCalendar size={24} className="inline-block mr-2" />
              12/12/2024 - 12:00 PM
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

const AuthEvents = Authenticated(Events);
export default AuthEvents;