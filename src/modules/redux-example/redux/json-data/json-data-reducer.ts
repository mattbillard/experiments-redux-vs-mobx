import { Reducer } from 'redux';
import {
  JSON_DATA_LOADING,
  JSON_DATA_SUCCEDED,
  JSON_DATA_FAILED,
  JSON_DATA_SET_FOO,
} from './json-data-actions';

export interface IJsonDataReducer {
  isLoading: boolean;
  error: Error | null;
  jsonData: any;
}

const initialState: IJsonDataReducer = {
  isLoading: false,
  error: null,
  jsonData: null
};

export const jsonDataReducer: Reducer<IJsonDataReducer> = (state = initialState, action) => {
  switch (action.type) {
    // NOTE: this is MUCH less clear than MobX and requires 3 switch statements
    case JSON_DATA_LOADING: {
      return {
        ...state,
        error: null,
        isLoading: true,
        jsonData: null,
      };
    }

    case JSON_DATA_SUCCEDED: {
      const { jsonData } = action.payload;

      return {
        ...state,
        isLoading: false,
        jsonData,
      };
    }

    case JSON_DATA_FAILED: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    // NOTE: this is MUCH less clear than MobX because it requires lots of spread and map statements to alter a deeply nested property
    case JSON_DATA_SET_FOO: {
      const newJsonData = {
        ...state.jsonData,
        deeply: {
          ...state.jsonData.deeply,
          nested: {
            ...state.jsonData.deeply.nested,
            value: {
              ...state.jsonData.deeply.nested.value,
              foo: action.payload.foo
            } 
          }
        }
      };

      return {
        ...state,
        jsonData: newJsonData
      };
    }

    default:
      return state;
  }
}
