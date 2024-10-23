import { Link } from "react-router-dom";
import Authenticated from "../../../components/Authenticated"
import { BiArrowBack } from "react-icons/bi";

const ProfileEdit = () => {
  return (
    <section className="container mt-20">
      <Link to="/app/profile" className="text-zinc-400 flex gap-2 mb-5">
        <BiArrowBack size={24} />
        Volver
      </Link>
      <h1 className="text-3xl font-bold mb-10">Editar perfil</h1>
      <form className="space-y-8">
        <input type="file" name="name" placeholder="Foto de perfil" className="input"/>
        <fieldset>
          <legend>Información personal</legend>
          <input type="text" name="name" placeholder="Nombre" className="input"/>
          <input type="text" name="lastname" placeholder="Apellido"className="input" />
          <input type="text" name="lastname" placeholder="Documento"className="input" />
          <input type="date" name="birthday" className="input"/>
          <input type="text" name="blood" placeholder="Tipo de sangre" className="input"/>
        </fieldset>
        <fieldset>
          <legend>Motocicleta</legend>
          <input type="file" name="name" placeholder="Foto de la motocicleta" className="input"/>
          <input type="text" name="model" placeholder="Modelo" className="input"/>
          <input type="text" name="brand" placeholder="Marca" className="input"/>
          <input type="text" name="cc" placeholder="Cilindrada" className="input"/>
        </fieldset>
      </form>
    </section>
  )
}

const AuthenticatedProfileEdit = Authenticated(ProfileEdit);
export default AuthenticatedProfileEdit;