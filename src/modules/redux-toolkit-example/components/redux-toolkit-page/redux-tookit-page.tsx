import React from 'react';
import { Provider } from 'react-redux';

import { Counter, JsonData, Timer } from '..';
import { store } from '../../redux';

export const ReduxToolkitPage = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Page</h1>
        <Counter />
        <Timer />
        <JsonData />
      </div>
    </Provider>
  );
}
