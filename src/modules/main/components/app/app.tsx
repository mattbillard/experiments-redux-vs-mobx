import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { MobxPage } from '../../../mobx-example/components';
import { ReduxPage } from '../../../redux-example/components';
import { ReduxToolkitPage } from '../../../redux-toolkit-example/components';
import './app.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/mobx">MobX</Link> |&nbsp;
        <Link to="/redux">Redux</Link> |&nbsp;
        <Link to="/redux-toolkit">Redux Toolkit</Link>
      </div>
      <Switch>
        <Route path="/mobx" component={MobxPage} />
        <Route path="/redux" component={ReduxPage} />
        <Route path="/redux-toolkit" component={ReduxToolkitPage} />
      </Switch>
    </BrowserRouter>
  );
}
