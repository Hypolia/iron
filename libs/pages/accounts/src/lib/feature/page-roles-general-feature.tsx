import {PageRolesGeneral} from "../ui/page-roles-general";
import {useGetRolesQuery} from "@hypolia/domains/users";

export function PageRolesGeneralFeature () {

  const { data: rolesResponse } = useGetRolesQuery({})
  return (
    <PageRolesGeneral
      isLoading={true}
      roles={rolesResponse && rolesResponse.data || []}
    />
  )
}
