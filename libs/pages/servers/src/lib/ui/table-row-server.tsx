import type { ServerEntity } from '@hypolia/contracts'
import { type TableHeadProps, TableRow } from '@hypolia/ui'

export interface TableRowServerProps {
  data: ServerEntity
  dataHead: TableHeadProps<ServerEntity>[]
  columnsWidth?: string
  isLoading?: boolean
}

export function TableRowServer(props: TableRowServerProps) {
  const {
    data,
    dataHead,
    columnsWidth = `repeat(${dataHead.length},minmax(0,1fr))`,
    isLoading
  } = props

  return (
    <TableRow
      link={`/servers/${data.id}`}
      data={data}
      filter={[]}
      columnsWidth={columnsWidth}
      disabled={isLoading}
      className="text-slate-500 text-sm"
    >
      <>
      </>
    </TableRow>
  )
}
