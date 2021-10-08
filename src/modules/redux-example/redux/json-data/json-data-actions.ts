import { mockXhrService } from "../../../shared/services";

export const JSON_DATA_LOADING =  'JSON_DATA_LOADING';
export const JSON_DATA_SUCCEDED =  'JSON_DATA_SUCCEDED';
export const JSON_DATA_FAILED =  'JSON_DATA_FAILED';
export const JSON_DATA_SET_FOO =  'JSON_DATA_SET_FOO';

export const getJsonData = (success: boolean) => async (dispatch: any) => {
  // NOTE: this is not as clear as MobX
  dispatch({ type: JSON_DATA_LOADING });

  try {
    const jsonData = await mockXhrService.getJsonData(success);
    dispatch({ type: JSON_DATA_SUCCEDED, payload: { jsonData }});
  } catch (error) {
    dispatch({ type: JSON_DATA_FAILED, payload: { error } });
  }
}

export const setFoo = (foo: string) => {
  return { type: JSON_DATA_SET_FOO, payload: { foo }};
}
