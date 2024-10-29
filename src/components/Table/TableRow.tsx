import { ReactNode } from "react";

interface TableRowProps {
  columns: Array<{ key: string; value: string | ReactNode}>;
}

const TableRow = ({ columns }: TableRowProps) => {
  return (
    <tr className='hover:bg-zinc-800 duration-200 flex flex-col w-full sm:table-row mb-2 sm:mb-0 border border-zinc-600 p-5 md:p-0 rounded-lg md:border-none'>
      {columns.map((column) => (
        <td key={column.key} className='md:px-3 md:py-4'>
          {column.value}
        </td>
      ))}
    </tr>
  )
}

export default TableRow;