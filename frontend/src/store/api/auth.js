import { baseApi } from './base';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: 'users/register',
        method: 'POST',
        body,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      transformResponse: (response) => response.data,
    }),
    changeUserPassword: builder.mutation({
      query: (body) => ({
        url: 'users/password',
        method: 'PATCH',
        body,
      }),
    }),
    getUser: builder.query({
      query: () => 'users/me',
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useChangeUserPasswordMutation,
} = authApi;
