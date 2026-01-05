import { Link } from "react-router-dom";
import Authenticated from "../../../components/Authenticated"
import { BiArrowBack, BiSave } from "react-icons/bi";
import useSingleMember from "../../../hooks/useSingleMember";
import { useEffect } from "react";
import PersonalInfoForm from "./components/form/PersonalInfo";

const ProfileEdit = () => {
  const { member, getMember } = useSingleMember();
  const userName = localStorage.getItem('username');

  useEffect(() => {
    getMember(userName as string);
  }, [getMember, userName]);

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('update profile');
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('data', data);
  }

  return (
    <section className="container mt-20 mb-28">
      <Link to="/app/profile" className="text-zinc-400 flex gap-2 mb-5">
        <BiArrowBack size={24} />
        Volver
      </Link>
      <h1 className="text-3xl font-bold mb-10">Editar perfil</h1>
      <form className="space-y-8" onSubmit={handleUpdate}>
        <input type="file" name="name" placeholder="Foto de perfil" className="input"/>
        <PersonalInfoForm member={member} />
        <div className="my-10 flex gap-2">
          <Link to="/app/profile" className="btn btn-secondary">
            Cancelar
          </Link>
          <button className="btn btn-primary inline-flex">
            <BiSave size={24} className="mr-2" />
            Guardar
          </button>
        </div>
      </form>
    </section>
  )
}

const AuthenticatedProfileEdit = Authenticated(ProfileEdit);
export default AuthenticatedProfileEdit;