import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authSlice } from "./auth.store";
import { REDUX_DEV_MODE } from "../../constant/app.constant";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
