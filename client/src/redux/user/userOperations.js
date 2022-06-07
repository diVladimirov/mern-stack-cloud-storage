import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000/api/auth";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const createNewUser = createAsyncThunk(
  "user/createNewUserStatus",
  async (newUserData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/signup", newUserData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  "user/logInStatus",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/login", userData);
      // token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  "user/logOutStatus",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/logout");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = { createNewUser, logIn, logOut };
export default operations;
