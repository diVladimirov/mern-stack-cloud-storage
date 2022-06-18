import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getFiles = createAsyncThunk(
  "file/getFilesStatus",
  async (dirId, { rejectWithValue }) => {
    try {
      let url = "/files";
      if (dirId) {
        url = `/files?parent=${dirId}`;
      }
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const createDir = createAsyncThunk(
  "file/createDirStatus",
  async ({ dirId, name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/files", {
        name,
        parent: dirId,
        type: "dir",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = { getFiles, createDir };

export default operations;
