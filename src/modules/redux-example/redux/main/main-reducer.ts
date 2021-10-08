import { Reducer } from 'redux';
import {
  INCREASE_TIMER,
  UPDATE_COUNT,
} from './main-actions';

export interface ISampleReducerState {
  count: number;
  timer: number;
}

const initialState: ISampleReducerState = {
  count: 0,
  timer: 0,
};

// NOTE: this is much more verbose and not as clear as the MobX store
export const mainReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_TIMER: {
      const newTimer = state.timer + 1;

      return {
        ...state,
        timer: newTimer
      };
    }

    case UPDATE_COUNT: {
      const { count } = action.payload;
      const newCount = state.count + count;

      return {
        ...state,
        count: newCount,
      };
    }

    default:
      return state;
  }
}
