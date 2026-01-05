export default function MotorcycleForm() {
  return (
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
  )
}