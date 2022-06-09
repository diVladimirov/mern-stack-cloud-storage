import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getFiles = createAsyncThunk(
  "file/getFilesStatus",
  async (dirId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/files${dirId ? "?parent=" + dirId : ""}`
      );
      console.log(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = { getFiles };

export default operations;
