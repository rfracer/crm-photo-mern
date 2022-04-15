import { configureStore } from '@reduxjs/toolkit';
import { clientsApi } from 'store/api/clients';
import { tasksApi } from 'store/api/tasks';
import { authApi } from 'store/api/auth';
import authReducer from './state/authSlice';

export * from './api/clients';
export * from './api/tasks';
export * from './api/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      clientsApi.middleware,
      authApi.middleware,
      tasksApi.middleware,
    ]),
});
