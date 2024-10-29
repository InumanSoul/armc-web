import Authenticated from "../../../components/Authenticated"
import TableRow from "../../../components/Table/TableRow";
import useMotorcycles from "../../../hooks/useMotorcycles";
import { getYearOnly } from "../../../utils";

const Motorcycles = () => {
  const { motorcycles, loading, error } = useMotorcycles();
  return (
    <section className='container mt-20'>
      <h1 className='text-3xl font-bold mb-10'>Motocicletas</h1>

      {loading && <p>Cargando...</p>}

      {error && <p>{error}</p>}

      <table className='w-full'>
				<thead>
					<tr className='border-b border-zinc-700'>
						<th className='px-3 py-1 text-left text-lg'>Dueño</th>
						<th className='px-3 py-1 text-left text-lg'>Marca</th>
						<th className='px-3 py-1 text-left text-lg'>Modelo</th>
						<th className='px-3 py-1 text-left text-lg'>Cilindrada</th>
						<th className='px-3 py-1 text-left text-lg'>Año</th>
					</tr>
				</thead>
				<tbody>
          {
            motorcycles.map((motorcycle) => (
              <TableRow key={motorcycle.documentId} columns={[
                { key: 'owner', value: motorcycle.owner.name },
                { key: 'brand', value: motorcycle.brand },
                { key: 'model', value: motorcycle.model },
                { key: 'cc', value: `${motorcycle.engineCapacity}cc` },
                { key: 'year', value: `${getYearOnly(motorcycle.year)}` }
              ]} />
            ))
          }
				</tbody>
			</table>
    </section>
  )
}

const AuthMotorcycles = Authenticated(Motorcycles);
export default AuthMotorcycles;