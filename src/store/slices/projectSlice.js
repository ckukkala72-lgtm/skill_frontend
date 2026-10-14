import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "../../services/api";

export const loadProjects = createAsyncThunk("projects/load", async () => {
  return fetchProjects();
});

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProjects.pending, (state) => {
        if (!state.data) {
          state.status = "loading";
        }
        state.error = null;
      })
      .addCase(loadProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
