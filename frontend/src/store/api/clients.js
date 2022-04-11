import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
  }),
  tagTypes: ['Clients'],
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => 'clients/test',
      providesTags: ['Clients'],
    }),
    getClient: builder.query({
      query: (id) => ({ url: `clients/${id}` }),
      transformResponse: (response) => response.data,
      providesTags: ['Clients'],
    }),
    addClient: builder.mutation({
      query: (body) => ({
        url: 'clients',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Clients'],
    }),
    updateClient: builder.mutation({
      query: (body) => ({
        url: 'clients',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Clients'],
    }),
    removeClient: builder.mutation({
      query: (body) => ({
        url: 'clients',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Clients'],
    }),
  }),
});

export const {
  useGetClientsQuery,
  useGetClientQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useRemoveClientMutation,
} = clientsApi;
