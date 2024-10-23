import { Link } from "react-router-dom";

export default function Register() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  }

	return (
		<section className='container h-dvh flex flex-col items-center justify-center'>
			<Link to={'/'}>
				<img src='/logo.png' alt='Logo' className='w-20 mb-12' />
			</Link>
			<form
				className='space-y-4 border border-zinc-700 p-8 rounded-xl w-full max-w-md'
				onSubmit={handleSubmit}>
				<div className="mb-5">
					<h1 className='text-3xl font-bold'>Unite a Angeles Rebeldes</h1>
					<p className="text-zinc-400">Registrate para formar parte de nuestra hermandad de motociclistas</p>
				</div>
				<fieldset className="space-y-4">
					<legend className='text-xl font-bold'>Datos personales</legend>
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
				</fieldset>
				<fieldset className="space-y-4">
					<legend className='text-xl font-bold'>Motocicleta</legend>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold' htmlFor='motorcycle'>
							Marca
						</label>
						<input
							type="text"
							name="brand"
							id="brand"
							placeholder='Marca'
							className='input'
						/>
					</div>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold' htmlFor='motorcycle'>
							Modelo
						</label>
						<input
							type="text"
							name="model"
							id="model"
							placeholder='Modelo'
							className='input'
						/>
					</div>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold' htmlFor='motorcycle'>
							Cilindrada
						</label>
						<input
							type="text"
							name="engine"
							id="engine"
							placeholder='Cilindrada'
							className='input'
						/>
					</div>
				</fieldset>
				<button
					type='submit'
					className='btn btn-primary btn-block'>
					Solicitar registro
				</button>
			</form>
			<Link to='/login' className='justify-center text-amber-600 w-full inline-flex py-4'>
					Ya tengo cuenta
				</Link>
		</section>
	);
}
