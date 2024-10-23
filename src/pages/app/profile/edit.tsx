import { Link } from "react-router-dom";
import Authenticated from "../../../components/Authenticated"
import { BiArrowBack, BiSave } from "react-icons/bi";
import useSingleMember from "../../../hooks/useSingleMember";
import { useEffect } from "react";

const ProfileEdit = () => {
  const { updateMember, member, getMember } = useSingleMember();
  const userId = '67112202ed5f426465e9a7c7';

  useEffect(() => {
    getMember(userId);
  }, [getMember, userId]);

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
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold">Información personal</legend>
          <div className='flex flex-col'>
            <label className='label' htmlFor='name'>
              Nombre
            </label>
            <input
              type='text'
              name='name'
              value={member?.personalInfo.firstName}
              id='name'
              placeholder='Nombre'
              className='input'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='name'>
              Apellido
            </label>
            <input
              type='text'
              name='name'
              value={member?.personalInfo.lastName}
              id='name'
              placeholder='Nombre'
              className='input'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='name'>
              Documento
            </label>
            <input
              type='text'
              name='name'
              value={member?.personalInfo.idNumber}
              id='name'
              placeholder='Nombre'
              className='input'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='birthday'>
              Fecha de nacimiento
            </label>
            <input 
              type="date"
              name="birthday"
              value={member?.personalInfo.dateOfBirth}
              readOnly
              id="birthday"
              className="input"
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='bloodType'>
              Tipo de sangre
            </label>
            <input
              type='text'
              name='bloodType'
              id='bloodType'
              placeholder='Tipo de sangre'
              className='input'
            />
          </div>
        </fieldset>
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold">Motocicleta</legend>
          <input type="file" name="name" placeholder="Foto de la motocicleta" className="input"/>
          <div className='flex flex-col'>
            <label className='label' htmlFor='brand'>
              Marca
            </label>
            <input
              type='text'
              name='brand'
              id='brand'
              placeholder='Marca'
              className='input'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='model'>
              Modelo
            </label>
            <input
              type='text'
              name='model'
              id='model'
              placeholder='Modelo'
              className='input'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='year'>
              Año
            </label>
            <input
              type='text'
              name='year'
              id='year'
              placeholder='Año'
              className='input'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label' htmlFor='engine'>
              Cilindrada
            </label>
            <input
              type='text'
              name='engine'
              id='engine'
              placeholder='Cilindrada'
              className='input'
            />
          </div>
        </fieldset>
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