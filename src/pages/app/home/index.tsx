import { Link } from "react-router-dom";
import Authenticated from "../../../components/Authenticated";

const LoggedHome = () => {
  return (
    <section className="container mt-12 mb-28">
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
        <div className="my-4">
          <p>
            Saldo actual
          </p>
          <h3 className="font-bold text-2xl">Gs. 4.870.000</h3>
        </div>
        <p className="text-sm text-zinc-400">
          Último movimiento: Gs. 500.000 (Pago de cuota)
        </p>
      </div>
      <div className="p-5 rounded-xl border border-zinc-600">
        <h2 className="font-bold text-2xl">Eventos</h2>
        <ul className="mb-5 divide-y divide-zinc-700">
          <li className="py-5">
            <Link to="/events/event-detail">
              <h3 className="font-bold text-lg">Aniversario Caballeros del Asfalto MC</h3>
              <p className="text-zinc-400">30/11/2024 - 18:00 hs</p>
            </Link>
          </li>
          <li className="py-5">
            <Link to="/events/event-detail-2">
              <h3 className="font-bold text-lg">Aniversario Angeles Rebeldes</h3>
              <p className="text-zinc-400">06/12/2024 - 20:00 hs</p>
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