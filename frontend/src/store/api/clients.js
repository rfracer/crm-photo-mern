import { baseApi } from './base';

export const clientsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => 'clients',
      providesTags: () => ['Clients'],
      transformResponse: (response) => response.data,
    }),
    getClient: builder.query({
      query: (id) => ({ url: `clients/${id}` }),
      transformResponse: (response) => response.data,
      providesTags: () => ['Clients'],
    }),
    addClient: builder.mutation({
      query: (body) => ({
        url: 'clients',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => ['Clients'],
    }),
    updateClient: builder.mutation({
      query: ({ id, data }) => ({
        url: `clients/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: () => ['Clients'],
    }),
    removeClient: builder.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Clients'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetClientsQuery,
  useGetClientQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useRemoveClientMutation,
} = clientsApi;
