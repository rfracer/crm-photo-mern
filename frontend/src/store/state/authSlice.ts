import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
}

interface UserPayload {
  email: string | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayload>) => {
      state.user = action.payload.email;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
