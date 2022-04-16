import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    credentials: 'include',
  }),
  tagTypes: ['Clients', 'Tasks'],
  endpoints: () => ({}),
});
