export const INCREASE_TIMER =  'INCREASE_TIMER';
export const UPDATE_COUNT =  'UPDATE_COUNT';

export const increaseTimer = () => {
  return { type: INCREASE_TIMER };
}

export const updateCount = (count: number) => {
  return { type: UPDATE_COUNT, payload: { count } };
}
