import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index.store";

export interface IAuth {
  isAdmin: boolean;
  token: string;
  loggedIn: boolean;
}

const initialState: IAuth = {
  isAdmin: false,
  token: "",
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setAuthState: (
      state,
      action: PayloadAction<{ token: string; isAdmin: boolean }>
    ) => {
      const { token, isAdmin } = action.payload;
      state.token = token;
      state.isAdmin = isAdmin;
    },
  },
});

export const uiState = (state: RootState) => state.auth;
export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;
