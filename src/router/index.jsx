import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '@views/Home';
import Detail from '@views/Detail';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:code" component={Detail} />
    </Switch>

    <ToastContainer
      position="top-center"
    />
  </BrowserRouter>
);

export default Router;