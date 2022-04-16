import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state/authSlice';
import { baseApi } from './api/base';

export * from './api/clients';
export * from './api/tasks';
export * from './api/auth';
export * from './api/base';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware]),
});
