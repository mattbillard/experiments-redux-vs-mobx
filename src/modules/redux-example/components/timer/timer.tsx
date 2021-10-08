import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { increaseTimer, IStoreState } from '../../redux';

export const Timer = () => {
  const { timer } = useSelector((state: IStoreState) => state.mainReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // NOTE: Redux requires mixing logic in with components. Compare to MobX which is simpler
    const cancel = setInterval(() => {
      dispatch(increaseTimer());
    }, 1000);
    return () => clearInterval(cancel);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      {timer}
    </div>
  );
}
