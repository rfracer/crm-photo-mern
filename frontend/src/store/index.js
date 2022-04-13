import { configureStore } from '@reduxjs/toolkit';
import { clientsApi } from 'store/api/clients';
import { authApi } from 'store/api/auth';
import authReducer from './state/authSlice';

export * from './api/clients';
export * from './api/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([clientsApi.middleware, authApi.middleware]),
});
