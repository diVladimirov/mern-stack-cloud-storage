import { createSlice } from "@reduxjs/toolkit";
import fileOperations from "./fileOperations";

const initialState = {
  files: [],
  currentDir: null,
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
  extraReducers: {
    [fileOperations.getFiles.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
  },
});

export default fileSlice.reducer;
