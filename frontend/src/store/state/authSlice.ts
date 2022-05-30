import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
  user: UserPayload | null;
}

interface UserPayload {
  email: string;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayload | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
