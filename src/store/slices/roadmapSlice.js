import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRoadmap } from "../../services/api";

export const loadRoadmap = createAsyncThunk("roadmap/load", async () => {
  return fetchRoadmap();
});

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRoadmap.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadRoadmap.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadRoadmap.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default roadmapSlice.reducer;
