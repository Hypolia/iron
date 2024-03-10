import {RoleEntity} from "@hypolia/contracts";
import {TableHeadProps, TableRow} from "@hypolia/ui";

export interface TableRowRoleProps {
  data: RoleEntity
  dataHead: TableHeadProps<RoleEntity>[]
  columnsWidth?: string
  isLoading?: boolean
}

export function TableRowRole(props: TableRowRoleProps) {
  const {
    data,
    dataHead,
    columnsWidth = `repeat(${dataHead.length},minmax(0,1fr))`,
    isLoading
  } = props

  return (
    <TableRow
      link={`/accounts/roles/${data.id}`}
      data={data}
      filter={[]}
      columnsWidth={columnsWidth}
      disabled={isLoading}
      className="text-slate-500 text-sm"
    >
      <>
        <div className="ml-4 text-slate-600">
          {data.label}
        </div>

      </>
    </TableRow>
  )
}
