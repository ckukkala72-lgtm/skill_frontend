import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRegister, submitRegistration } from "../../services/api";

export const loadRegister = createAsyncThunk("register/load", async () => {
  return fetchRegister();
});

export const sendRegistration = createAsyncThunk(
  "register/submit",
  async (payload) => {
    return submitRegistration(payload);
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: null,
    status: "idle",
    error: null,
    submitStatus: "idle",
    submitError: null,
  },
  reducers: {
    resetSubmit(state) {
      state.submitStatus = "idle";
      state.submitError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRegister.pending, (state) => {
        if (!state.data) {
          state.status = "loading";
        }
        state.error = null;
      })
      .addCase(loadRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendRegistration.pending, (state) => {
        state.submitStatus = "loading";
        state.submitError = null;
      })
      .addCase(sendRegistration.fulfilled, (state) => {
        state.submitStatus = "succeeded";
      })
      .addCase(sendRegistration.rejected, (state, action) => {
        state.submitStatus = "failed";
        state.submitError = action.error.message;
      });
  },
});

export const { resetSubmit } = registerSlice.actions;
export default registerSlice.reducer;
