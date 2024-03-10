import { useGetUserQuery } from "@hypolia/domains/users"

export function useAuth() {
  function verifyCreds() {



    const query = useGetUserQuery()


    // if (isError) {
    //   return <Navigate to={'/authentication/login'} replace />
    // }


    return query
  }

  return {
    verifyCreds
  }
}
