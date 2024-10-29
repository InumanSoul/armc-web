import { ReactNode } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = ({
	columns,
	data,
}: {
	columns: Array<{ key: string; title: string }>;
	data: Record<string, ReactNode>[];
}) => {
	return (
		<table className='w-full flex flex-row sm:table rounded-lg overflow-hidden my-5'>
			<TableHead columns={columns} />
			<TableBody>
				{data.map((row, index) => (
					<TableRow key={index} columns={Object.entries(row).map(([key, value]) => ({ key, value }))} />
				))}
			</TableBody>
		</table>
	);
};

export default Table;
