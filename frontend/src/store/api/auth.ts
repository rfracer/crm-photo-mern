import { User, UserRegister, PasswordChangeType, Language } from 'types/types';
import { baseApi } from './base';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { user: Omit<User, 'password'>; message: string },
      User
    >({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
    registerUser: builder.mutation<
      { user: Pick<User, 'email'>; message: string },
      UserRegister
    >({
      query: (body) => ({
        url: 'users/register',
        method: 'POST',
        body,
      }),
    }),
    logoutUser: builder.mutation<any, void>({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
    }),
    changeUserPassword: builder.mutation<
      { message: string },
      PasswordChangeType
    >({
      query: (body) => ({
        url: 'users/password',
        method: 'PATCH',
        body,
      }),
    }),
    changeUserLanguage: builder.mutation<{ message: string }, Language>({
      query: (body) => ({
        url: 'users/language',
        method: 'PATCH',
        body,
      }),
    }),
    getUser: builder.query<
      {
        user: Pick<User, 'email'>;
        settings: {
          language: string;
          currency: string;
        };
      },
      void
    >({
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
  useChangeUserLanguageMutation,
} = authApi;
