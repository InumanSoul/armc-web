import Authenticated from "../../components/Authenticated"

const Motorcycles = () => {
  return (
    <section className='container mt-20'>
      <h1 className='text-3xl font-bold mb-10'>Motocicletas</h1>
      <table className='w-full'>
				<thead>
					<tr className='border-b border-zinc-700'>
						<th className='px-3 py-1 text-left text-lg'>Dueño</th>
						<th className='px-3 py-1 text-left text-lg'>Marca</th>
						<th className='px-3 py-1 text-left text-lg'>Modelo</th>
						<th className='px-3 py-1 text-left text-lg'>Cilindrada</th>
					</tr>
				</thead>
				<tbody>
							<tr className='hover:bg-zinc-700'>
								<td className='px-3 py-4'>
									<p>John Doe</p>
								</td>
                <td className='px-3 py-4'>
                  <p>BMW</p>
                </td>
                <td className='px-3 py-4'>
                  <p>K 1600 GTL</p>
                </td>
                <td className='px-3 py-4'>
                  <p>1600cc</p>
                </td>
							</tr>
				</tbody>
			</table>
    </section>
  )
}

const AuthMotorcycles = Authenticated(Motorcycles);
export default AuthMotorcycles;