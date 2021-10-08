import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCount,
  selectCount,
} from "../../redux";

export function Counter() {
  // NOTE: this convention saves no lines of code, isn't as clear as the previous convention and does not allow you to destructure multiple props at once
  const count = useSelector(selectCount); 
  const dispatch = useDispatch();

  const handleClick = (count: number) => {
    dispatch(updateCount(count));
  };

  return (
    <div>
      <h2>Counter</h2>
      {count} <br />
      <button onClick={() => handleClick(-1)}>-</button>
      <button onClick={() => handleClick(1)}>+</button>
    </div>
  );
}
