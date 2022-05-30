import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state/authSlice';
import settingsReducer from './state/settingsSlice';
import { baseApi } from './api/base';

export * from './api/clients';
export * from './api/tasks';
export * from './api/auth';
export * from './api/base';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
