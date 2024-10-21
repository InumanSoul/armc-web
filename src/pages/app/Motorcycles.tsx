import Authenticated from "../../components/Authenticated"

const Motorcycles = () => {
  return (
    <section className='w-full h-dvh bg-gray-900 text-gray-50 flex items-center justify-center'>
      <h1 className='text-3xl font-bold'>Motocicletas</h1>
      <ul>
        <li>
          <p>Harley Davidson</p>
          <p>Modelo: Iron 883</p>
          <p>Año: 2021</p>
        </li>
      </ul>
    </section>
  )
}

const AuthMotorcycles = Authenticated(Motorcycles);
export default AuthMotorcycles;