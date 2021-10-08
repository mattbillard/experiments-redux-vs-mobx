import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type MainSliceState = {
  count: number
  timer: number
}

const initialState: MainSliceState = {
  count: 0,
  timer: 0,
}

export const mainSlice = createSlice({
  name: "mainSlice", // NOTE: really not sure what this is for
  initialState,
  reducers: {
    increaseTimer: (state) => {
      state.timer++;
    },
    updateCount: (state, action) => {
      // NOTE: Redux Toolkit uses Immer so you can modify state instead of needing to return a new copy. This is a nice feature
      state.count += action.payload;
    },
  },
});

export const { increaseTimer, updateCount } = mainSlice.actions;

// NOTE: this convention doesn't really help and just results in more exports. It would be clearer and more powerful to just do the following in the components
// const { count, timer } = useSelector((state: IStoreState) => state.mainReducer); 
export const selectCount = (state: RootState) => state.mainReducer.count;
export const selectTimer = (state: RootState) => state.mainReducer.timer;
