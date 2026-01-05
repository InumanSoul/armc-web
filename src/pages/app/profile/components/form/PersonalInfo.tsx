import { User } from "../../../../../types";

export default function PersonalInfoForm({ member }: { member: User | null }) {
	return (
		<fieldset className='space-y-4'>
			<legend className='text-xl font-bold'>Información personal</legend>
			<div className='flex flex-col'>
				<label className='label' htmlFor='name'>
					Nombre
				</label>
				<input
					type='text'
					name='name'
					defaultValue={member?.personalInfo.firstName}
					id='name'
					placeholder='Nombre'
					className='input'
          required
				/>
			</div>
			<div className='flex flex-col'>
				<label className='label' htmlFor='name'>
					Apellido
				</label>
				<input
					type='text'
					name='name'
					defaultValue={member?.personalInfo.lastName}
					id='name'
					placeholder='Nombre'
					className='input'
          required
				/>
			</div> 
			<div className='flex flex-col'>
				<label className='label' htmlFor='name'>
					Documento
				</label>
				<input
					type='text'
					name='name'
					defaultValue={member?.personalInfo.idNumber}
					id='name'
					placeholder='Nombre'
					className='input'
          required
				/>
			</div>
			<div className='flex flex-col'>
				<label className='label' htmlFor='birthday'>
					Fecha de nacimiento
				</label>
				<input
					type='date'
					name='birthday'
					defaultValue={member?.personalInfo.dateOfBirth}
					readOnly
          disabled
					id='birthday'
					className='input'
				/>
			</div>
			<div className='flex flex-col'>
				<label className='label' htmlFor='bloodType'>
					Tipo de sangre
				</label>
				<input
					type='text'
					name='bloodType'
					defaultValue={member?.personalInfo.bloodType}
					id='bloodType'
					placeholder='Tipo de sangre'
					className='input'
				/>
			</div>
      <div className='flex flex-col'>
				<label className='label' htmlFor='address'>
					Dirección
				</label>
				<input
					type='text'
					name='address'
					defaultValue={member?.personalInfo.address}
					id='address'
					placeholder='Tipo de sangre'
					className='input'
				/>
			</div>
		</fieldset>
	);
}
