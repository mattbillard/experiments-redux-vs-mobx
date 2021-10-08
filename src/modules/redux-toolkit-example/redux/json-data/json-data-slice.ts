import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockXhrService } from "../../../shared/services";
import { RootState } from "../store";

type MainSliceState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  jsonData: any;
};

const initialState: MainSliceState = {
  status: "idle",
  error: null,
  jsonData: null,
};

// NOTE: magic syntax... It works with the extraReducers below. See docs for createAsyncThunk
export const getJsonData = createAsyncThunk(
  "jsonData/fetchPosts", // NOTE: this syntax is strange
  async (success: boolean) => {
    return await mockXhrService.getJsonData(success);
  }
);

export const jsonDataSlice = createSlice({
  name: "jsonDataSlice",
  initialState,
  reducers: {
    setFoo: (state, action) => {
      state.jsonData.deeply.nested.value.foo = action.payload;
    },
  },
  // NOTE: so weird to have reducers and "extraReducers" and builder syntax. It does NOT seem simpler than old syntax.
  extraReducers(builder) {
    builder
      .addCase(getJsonData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getJsonData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jsonData = action.payload;
      })
      .addCase(getJsonData.rejected, (state, action) => {
        state.status = "failed";
        // @ts-ignore
        state.error = action.error.message;
      });
  },
});

export const { setFoo } = jsonDataSlice.actions;

export const selectJsonData = (state: RootState) => state.jsonDataReducer.jsonData;
