import { createSlice } from "@reduxjs/toolkit";
import userOperations from "./userOperations";

const initialState = {
  user: {},
  token: null,
  isAuth: false,
  isFetchingCurrentUser: false,
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
    [userOperations.fetchCurrentUser.pending]: (state, action) => {
      state.isFetchingCurrentUser = true;
    },
    [userOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.isAuth = true;
      state.isFetchingCurrentUser = false;
    },
    [userOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default userSlice.reducer;
