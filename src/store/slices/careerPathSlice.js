import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCareerPaths } from "../../services/api";

export const loadCareerPaths = createAsyncThunk("careerPaths/load", async () => {
  return fetchCareerPaths();
});

const careerPathSlice = createSlice({
  name: "careerPaths",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCareerPaths.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCareerPaths.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadCareerPaths.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default careerPathSlice.reducer;
