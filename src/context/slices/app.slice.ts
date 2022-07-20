import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type AppType = {
  loading: boolean;
  enableCanvas: boolean;
};

const initialState: AppType = {
  loading: true,
  enableCanvas: false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    ENABLE_CANVAS: (state, action: PayloadAction<boolean>) => {
      state.enableCanvas = action.payload;
    },
  },
});

export const { SET_LOADING, ENABLE_CANVAS } = AppSlice.actions;
export default AppSlice.reducer;
