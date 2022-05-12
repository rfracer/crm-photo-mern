import { baseApi } from './base';

export interface Client {
  _id?: string;
  // eslint-disable-next-line no-restricted-globals
  name: string;
  category: string;
  date: Date;
  value: number;
  alreadyPaid: number;
  // eslint-disable-next-line no-restricted-globals
  status: 'lead' | 'contract' | 'completed';
  address: string;
  info: string;
}

export const clientsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<Client[], void>({
      query: () => 'clients',
      providesTags: () => ['Clients'],
      transformResponse: (response: { data: Client[] }) => response.data,
    }),
    getClient: builder.query<Client, string>({
      query: (id) => ({ url: `clients/${id}` }),
      transformResponse: (response: { data: Client }) => response.data,
      providesTags: () => ['Clients'],
    }),
    addClient: builder.mutation<Client, Client>({
      query: (body) => ({
        url: 'clients',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: Client; message: string }) =>
        response.data,
      invalidatesTags: () => ['Clients'],
    }),
    updateClient: builder.mutation<
      Client,
      { id: string; data: Partial<Client> }
    >({
      query: ({ id, data }) => ({
        url: `clients/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (response: { data: Client }) => response.data,
      invalidatesTags: () => ['Clients'],
    }),
    removeClient: builder.mutation<{ message: string; data: Client }, string>({
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
