import React from 'react';

import { Counter, JsonData, Timer } from '../../components';

export const MobxPage = () => {
  return (
    <div>
      <h1>MobX Page</h1>
      <Counter />
      <Timer />
      <JsonData />
    </div>
  );
}
