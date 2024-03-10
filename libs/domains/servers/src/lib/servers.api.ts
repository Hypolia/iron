import {createApi, EndpointBuilder, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@hypolia/state/store";
import {ServerEntity} from "@hypolia/contracts";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333/servers',
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState() as RootState
    headers.set('Authorization', `Bearer ${user.token}`)
  }
})

export const serversApi = createApi({
  reducerPath: 'serversApi',
  baseQuery,
  tagTypes: ['servers'],
  endpoints: (builder) => ({
    getServers: builder.query<ServerEntity[], void>({
      query: () => '/',
      providesTags: ['servers']
    })
  })
})

export const {
  useGetServersQuery
} = serversApi
