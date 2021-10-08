import React from 'react';
import { Provider } from 'react-redux';

import { Counter, JsonData, Timer } from '../../components';
import { configureStore } from '../../redux';

const store = configureStore();

export const ReduxPage = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Page</h1>
        <Counter />
        <Timer />
        <JsonData />
      </div>
    </Provider>
  );
}
