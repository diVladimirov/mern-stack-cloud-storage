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
      // state.currentDir = action.payload;
      console.log(action.payload);
    },
    [fileOperations.createDir.fulfilled]: (state, action) => {
      state.files.push(action.payload);
    },
  },
});

export default fileSlice.reducer;
