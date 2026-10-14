import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHeader } from "../../services/api";

export const loadHeader = createAsyncThunk("header/load", async () => {
  return fetchHeader();
});

const headerSlice = createSlice({
  name: "header",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadHeader.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadHeader.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadHeader.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default headerSlice.reducer;
