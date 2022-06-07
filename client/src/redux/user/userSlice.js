import { createSlice } from "@reduxjs/toolkit";
import userOperations from "./userOperations";

const initialState = {
  user: {},
  token: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [userOperations.createNewUser.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
    },
    [userOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isAuth = true;
    },
    [userOperations.logOut.fulfilled]: (state, action) => {
      state.user = {};
      state.token = null;
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
