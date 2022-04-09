import { configureStore } from '@reduxjs/toolkit';
import { clientsApi } from 'store/api/clients';

export * from './api/clients';

export const store = configureStore({
  reducer: {
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientsApi.middleware),
});
