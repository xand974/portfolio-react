import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type AppType = {
  loading: boolean;
};

const initialState: AppType = {
  loading: true,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { SET_LOADING } = AppSlice.actions;
export default AppSlice.reducer;
