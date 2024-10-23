import { Link } from "react-router-dom";
import Authenticated from "../../../components/Authenticated";

const LoggedHome = () => {
  return (
    <section className="container mt-20">
      <img src="/logo.png" alt="Angeles Rebeldes" className="w-20 object-cover mb-12 mx-auto" />
      <div className="space-y-5">
      <div className="p-5 rounded-xl border border-zinc-600">
        <h2 className="font-bold text-2xl">Comisión directiva</h2>
        <p>
          Presidente: Arturo Galeano
        </p>
        <p>
          Vicepresidente: Gilberto Ayala
        </p>
        <p>
          Secretario: Hugo Grange
        </p>
        <p>
          Tesorero: Oscar Martinez
        </p>
      </div>
      <div className="p-5 rounded-xl border border-zinc-600">
        <h2 className="font-bold text-2xl">Estado de cuenta</h2>
        <h3 className="font-bold text-xl">Gs. 1.000.000</h3>
        <p>
          Saldo actual
        </p>
        <p>
          Último movimiento: Gs. 500.000 (Pago de cuota)
        </p>
      </div>
      <div className="p-5 rounded-xl border border-zinc-600">
        <h2 className="font-bold text-2xl">Eventos</h2>
        <ul className="mb-5 divide-y divide-zinc-700">
          <li className="py-5">
            <Link to="/event/event-detail">
              <h3 className="font-bold text-lg">Evento #123456</h3>
              <p className="text-zinc-400">12/12/2024 - 12:00 PM</p>
            </Link>
          </li>
          <li className="py-5">
            <Link to="/event/event-detail">
              <h3 className="font-bold text-lg">Evento #123456</h3>
              <p className="text-zinc-400">12/12/2024 - 12:00 PM</p>
            </Link>
          </li>
        </ul>
        <Link to="/app/events" className="btn btn-secondary">Ver todos</Link>
      </div>
      </div>
    </section>
  );
}

const AuthHome = Authenticated(LoggedHome);
export default AuthHome;