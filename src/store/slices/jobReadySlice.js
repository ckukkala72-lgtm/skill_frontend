import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobReady } from "../../services/api";

export const loadJobReady = createAsyncThunk("jobReady/load", async () => {
  return fetchJobReady();
});

const jobReadySlice = createSlice({
  name: "jobReady",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadJobReady.pending, (state) => {
        if (!state.data) {
          state.status = "loading";
        }
        state.error = null;
      })
      .addCase(loadJobReady.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadJobReady.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default jobReadySlice.reducer;
