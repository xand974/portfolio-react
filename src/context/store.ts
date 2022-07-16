import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/app.slice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
