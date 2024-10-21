import { Link } from "react-router-dom";

export default function Register() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  }

	return (
		<section className='w-full h-dvh bg-zinc-900 text-zinc-50 flex flex-col items-center justify-center'>
			<Link to={'/'}>
				<img src='/logo.png' alt='Logo' className='w-28 mb-12' />
			</Link>
			<form
				className='space-y-4 border border-zinc-800 bg-zinc-700 p-8 rounded-xl w-full max-w-md'
				onSubmit={handleSubmit}>
				<div className="mb-5">
					<h1 className='text-3xl font-bold'>Unite a Angeles Rebeldes</h1>
					<p className="text-zinc-400">Registrate para formar parte de nuestra hermandad de motociclistas</p>
				</div>
				<div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='name'>
						Nombre
					</label>
					<input
            type="text"
						name='name'
						placeholder='Nombre'
						className='input'
					/>
				</div>
        <div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='lastname'>
						Apellido
					</label>
					<input
            type="text"
						name='lastname'
						placeholder='Apellido'
						className='input'
					/>
				</div>
        <div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='birthday'>
						Fecha de nacimiento
					</label>
					<input
            type="date"
						name='birthday'
						className='input'
					/>
				</div>
        <div className='flex flex-col'>
					<label className='text-sm font-semibold' htmlFor='motorcycle'>
						Motocicleta
					</label>
					<input
            type="text"
						name='motorcycle'
						placeholder='Motocicleta'
						className='input'
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary btn-block'>
					Registrarse
				</button>
			</form>
		</section>
	);
}
