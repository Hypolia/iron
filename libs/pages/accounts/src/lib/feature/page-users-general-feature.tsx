import {PageUsersGeneral} from '../ui/page-users-general'
import {useGetUsersQuery} from '@hypolia/domains/users'

export function PageUsersGeneralFeature() {
  const { data: response , isLoading } = useGetUsersQuery()

  return (
    <PageUsersGeneral
      users={response && response.data || []}
    />
  )
}
