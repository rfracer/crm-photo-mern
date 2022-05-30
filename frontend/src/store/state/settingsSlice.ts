import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface SettingsState {
  language: null | string;
  currency: null | string;
}

interface SettingsPayload {
  language: string;
  currency: string;
}

const initialState: SettingsState = {
  language: null,
  currency: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsPayload>) => {
      state.language = action.payload.language;
      state.currency = action.payload.currency;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.language = action.payload;
      }
    },
  },
});

export const { setSettings, setLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
