const MembershipCard = ({ name, joinDate }: { name: string, joinDate: string}) => {
  return (
    <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl p-4 space-y-2 w-full h-fit">
      <div className='flex items-center gap-2 mb-6'>
        <img
          src='/logo.png'
          alt='Logo'
          className='size-12 object-contain'
        />
        <p className='text-xl font-bold'>Angeles Rebeldes</p>
      </div>
      <dl>
        <dd className='font-semibold'>{name}</dd>
        <dd className='text-zinc-400 text-xs'>Miembro activo</dd>
      </dl>
      <dl>
        <dd className='font-semibold'>{joinDate}</dd>
        <dd className='text-zinc-400 text-xs'>Fecha ingreso</dd>
      </dl>
    </div>
  );
}

export default MembershipCard;