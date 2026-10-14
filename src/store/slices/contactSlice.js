import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchContact, submitEnquiry } from "../../services/api";

export const loadContact = createAsyncThunk("contact/load", async () => {
  return fetchContact();
});

export const sendEnquiry = createAsyncThunk(
  "contact/sendEnquiry",
  async (payload) => {
    return submitEnquiry(payload);
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    data: null,
    status: "idle",
    error: null,
    submitStatus: "idle",
    submitError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadContact.pending, (state) => {
        if (!state.data) {
          state.status = "loading";
        }
        state.error = null;
      })
      .addCase(loadContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loadContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendEnquiry.pending, (state) => {
        state.submitStatus = "loading";
        state.submitError = null;
      })
      .addCase(sendEnquiry.fulfilled, (state) => {
        state.submitStatus = "succeeded";
      })
      .addCase(sendEnquiry.rejected, (state, action) => {
        state.submitStatus = "failed";
        state.submitError = action.error.message;
      });
  },
});

export default contactSlice.reducer;
