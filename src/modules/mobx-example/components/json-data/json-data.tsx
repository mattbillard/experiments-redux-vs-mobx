import { observer } from "mobx-react"
import React from 'react';

import { jsonDataStore } from '../../mobx';

export const JsonData = observer(() => {
  const { error, getJsonData, isLoading, jsonData, setFoo } = jsonDataStore;

  return (
    <div>
      <h2>JsonData</h2>
      <button onClick={() => getJsonData(true)}>Get Data (Successful)</button>
      <button onClick={() => getJsonData(false)}>Get Data (Error)</button>

      <br /><br />

      {isLoading && (
        <div>Loading...</div>
      )}
      {error?.message && (
        <div className="error">{error.message}</div>
      )}
      {jsonData && (
        <div>
          <input type="text" onChange={(event) => setFoo(event.target.value)} value={jsonData.deeply.nested.value.foo} />
          <pre>{JSON.stringify(jsonData, null, '  ')}</pre>
        </div>
      )}

    </div>
  );
});
