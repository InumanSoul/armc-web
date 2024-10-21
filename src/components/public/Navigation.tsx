import { Link } from "react-router-dom"

const PublicNavigation = () => {
  return (
    <header className="w-full flex justify-between px-10 py-2 border-b border-b-zinc-700 items-center">
      <nav>
        <ul className='flex gap-4'>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/about'>Nosotros</Link></li>
          <li><Link to='/contact'>Contacto</Link></li>
          <li><Link to='/store'>Tienda</Link></li>
        </ul>
      </nav>
      <Link to={'/'}>
      <img src='/logo.png' alt='Logo' className='w-16' />
      </Link>
      <div className="space-x-2">
        <Link to='/register' className='btn btn-secondary'>Unirse</Link>
        <Link to='/login' className='btn btn-primary-outline'>Area de miembros</Link>
      </div>
    </header>
  )
}

export default PublicNavigation;