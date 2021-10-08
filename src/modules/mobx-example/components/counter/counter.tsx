import { observer } from "mobx-react"
import React from 'react';

import { mainStore } from '../../mobx';

export const Counter = observer(() => {
  // NOTE: MobX is more concise. You don't need to have different statements for props and methods
  const { count, updateCount } = mainStore;

  return (
    <div>
      <h2>Counter</h2>
      {count} <br />
      <button onClick={() => updateCount(-1)}>-</button>
      <button onClick={() => updateCount(1)}>+</button>
    </div>
  );
});
