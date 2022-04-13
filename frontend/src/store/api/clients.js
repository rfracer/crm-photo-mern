import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    credentials: 'include',
  }),
  tagTypes: ['Clients'],
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => 'clients',
      providesTags: ['Clients'],
      transformResponse: (response) => response.data,
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
      query: ({ id, data }) => ({
        url: `clients/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['Clients'],
    }),
    removeClient: builder.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: 'DELETE',
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
