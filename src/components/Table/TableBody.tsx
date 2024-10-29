import { ReactNode } from "react"

const TableBody = ({ children }: { children: ReactNode }) => {
  return (
    <tbody className='w-full'>
      {children}
    </tbody>
  )
}

export default TableBody;