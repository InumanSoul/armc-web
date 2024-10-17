import { Link } from 'react-router-dom';
import motorcycle from '../assets/motorcycle-repair.png';

export default function NotFound() {
  return (
    <section className='w-full h-dvh flex flex-col items-center justify-center'>
      <img src={motorcycle} alt="404" className='w-72' />
      <h1 className='text-5xl font-bold'>404</h1>
      <p>La página que buscas no existe</p>
      <Link to='/' className='btn btn-primary mt-4'>
        Volver al inicio
      </Link>
    </section>
  );
}