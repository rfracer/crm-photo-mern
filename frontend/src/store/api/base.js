import {
  createApi,
  fetchBaseQuery,
  retry,
} from '@reduxjs/toolkit/dist/query/react';

let apiURL = 'http://localhost:5000/api/';

if (process.env.NODE_ENV === 'production') {
  apiURL = '/api/';
}

const baseQuery = fetchBaseQuery({
  baseUrl: apiURL,
  credentials: 'include',
});

const baseQueryWithAuth = retry(
  async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (
      (result.error?.status === 401 &&
        result.error?.data.error.message === 'Forbidden') ||
      result.error?.status === 403
    ) {
      window.location.href = '/login';
      retry.fail(result.error);
    }
    return result;
  },
  {
    maxRetries: 0,
  }
);

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Clients', 'Tasks'],
  endpoints: () => ({}),
});
