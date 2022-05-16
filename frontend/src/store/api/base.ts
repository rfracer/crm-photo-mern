import {
  createApi,
  BaseQueryFn,
  fetchBaseQuery,
  retry,
} from '@reduxjs/toolkit/query/react';
import { FetchArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { FetchCustomError } from 'types/types';

let apiURL = 'http://localhost:5000/api/';

if (process.env.NODE_ENV === 'production') {
  apiURL = '/api/';
}

const baseQuery = fetchBaseQuery({
  baseUrl: apiURL,
  credentials: 'include',
});

const baseQueryWithAuth = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (
      result.error?.status === 401 ||
      /*result.error?.data.error.message === 'Forbidden'*/ result.error
        ?.status === 403
    ) {
      window.location.href = '/login';
      retry.fail(result.error);
    }
    return result.data ? result : { error: result.error as FetchCustomError };
  },
  {
    maxRetries: 0,
  }
);

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithAuth as BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchCustomError
  >,
  tagTypes: ['Clients', 'Tasks'],
  endpoints: () => ({}),
});
