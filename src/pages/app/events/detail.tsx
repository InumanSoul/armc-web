import { BiArrowBack } from "react-icons/bi";
import Authenticated from "../../../components/Authenticated";
import { Link } from "react-router-dom";

const EventDetail = () => {
  return (
    <section className="container mt-20">
      <Link to="/app/events" className="text-zinc-400 flex gap-2 mb-5">
        <BiArrowBack size={24} />
        Volver
      </Link>
      <div className="bg-zinc-600 rounded-xl overflow-hidden">
        <img src="https://placehold.co/512x320" alt="Evento ejemplo" className="w-full object-contain" />
      </div>
      <h1 className="text-3xl font-bold my-3">Evento #123456</h1>
      <p className="text-lg text-zinc-500">
        12/12/2024 - 12:00 PM
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        fermentum libero. Integer sit amet mauris ac purus feugiat
        fermentum. Nullam nec turpis
      </p>
    </section>
  );
}

const AuthEventDetail = Authenticated(EventDetail);
export default AuthEventDetail;