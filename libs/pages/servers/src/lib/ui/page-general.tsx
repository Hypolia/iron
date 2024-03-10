import {Table, TableHeadProps} from "@hypolia/ui";
import {ServerEntity} from "@hypolia/contracts";

export interface PageGeneralProps {
  servers?: ServerEntity[]
}
export function PageGeneral({ servers }: PageGeneralProps) {

  const tableHead: TableHeadProps<ServerEntity>[] = [
    {
      title: "Name"
    },
    {
      title: "Network"
    },
    {
      title: "Image"
    },
    {
      title: "Type"
    }
  ]

  const columnsWidth = "20% 20% 30% 20%"
  return (
    <div className="">

      <Table
        dataHead={tableHead}
        columnsWidth={columnsWidth}
      >
        <div>
          nombres de servers fetch {servers?.length}
        </div>

      </Table>
    </div>
  )
}
