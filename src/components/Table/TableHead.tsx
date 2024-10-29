interface TableHeadProps {
  columns: Array<{ key: string; title: string }>;
}

const TableHead = ({ columns }: TableHeadProps) => {
	return (
		<thead>
			<tr className='border-b border-zinc-700 hidden sm:table-row'>
				{columns.map((column) => (
					<th key={column.key} className='px-3 py-1 text-left'>
						{column.title}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
