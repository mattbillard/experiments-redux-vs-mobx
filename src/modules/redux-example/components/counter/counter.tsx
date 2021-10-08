import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { IStoreState, updateCount } from '../../redux';

export const Counter = () => {
  const { count } = useSelector((state: IStoreState) => state.mainReducer);
  const dispatch = useDispatch();

  const handleClick = (count: number) => {
    dispatch(updateCount(count));
  }

  return (
    <div>
      <h2>Counter</h2>
      {count} <br />
      <button onClick={() => handleClick(-1)}>-</button>
      <button onClick={() => handleClick(1)}>+</button>
    </div>
  );
}
