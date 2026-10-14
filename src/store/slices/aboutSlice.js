import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAbout } from "../../services/api";

export const loadAbout = createAsyncThunk("about/load", async () => {
  return fetchAbout();
});

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAbout.pending, (state) => {
        if (!state.data) {
          state.status = "loading";
        }
        state.error = null;
      })
      .addCase(loadAbout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadAbout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default aboutSlice.reducer;
