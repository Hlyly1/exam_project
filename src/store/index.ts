import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import subjcetReducer from "./slice/subject";

export const store = configureStore({
  reducer: {
    subject: subjcetReducer,
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
