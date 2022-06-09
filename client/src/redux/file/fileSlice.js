import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  currentDir: null,
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
});

export default fileSlice.reducer;
