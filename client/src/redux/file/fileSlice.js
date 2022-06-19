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
    [fileOperations.createDir.fulfilled]: (state, action) => {
      console.log("action", action);
      // state.files.push(action.payload);
    },
  },
});

export default fileSlice.reducer;
