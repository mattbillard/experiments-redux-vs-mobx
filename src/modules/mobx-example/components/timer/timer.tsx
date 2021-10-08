import { observer } from "mobx-react"
import React from 'react';

import { mainStore } from '../../mobx';

export const Timer = observer(() => {
  const { timer } = mainStore;

  return (
    <div>
      <h2>Timer</h2>
      {timer}
    </div>
  );
});
