import PublicNavigation from "../../components/public/Navigation";

export default function Contact () {
  return (
    <>
      <PublicNavigation />
      <section className='w-full max-w-2xl px-10 mx-auto'>
        <h1 className='text-3xl font-bold mt-28'>Contacto</h1>
        <p className='mt-5'>¿Tienes alguna duda o consulta? No dudes en contactarnos a través de nuestro formulario de contacto.</p>
        <form>
          <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold' htmlFor='name'>Nombre</label>
            <input type='text' name='name' placeholder='Nombre' className='input' />
          </div>
          <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold' htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' className='input' />
          </div>
          <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold' htmlFor='message'>Mensaje</label>
            <textarea name='message' placeholder='Mensaje' className='input' />
          </div>
          <button type='submit' className='btn btn-primary mt-5'>Enviar</button>
        </form>
      </section>
    </>
  )
}