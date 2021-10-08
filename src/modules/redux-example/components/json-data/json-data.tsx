import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { IStoreState, getJsonData, setFoo } from '../../redux';

export const JsonData = () => {
  const { error, isLoading, jsonData } = useSelector((state: IStoreState) => state.jsonDataReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>JsonData</h2>
      <button onClick={() => dispatch(getJsonData(true))}>Get Data (Successful)</button>
      <button onClick={() => dispatch(getJsonData(false))}>Get Data (Error)</button>

      <br /><br />

      {isLoading && (
        <div>Loading...</div>
      )}
      {error?.message && (
        <div className="error">{error.message}</div>
      )}
      {jsonData && (
        <div>
          <input type="text" onChange={(event) => dispatch(setFoo(event.target.value))} value={jsonData.deeply.nested.value.foo} />
          <pre>{JSON.stringify(jsonData, null, '  ')}</pre>
        </div>
      )}

    </div>
  );
};
