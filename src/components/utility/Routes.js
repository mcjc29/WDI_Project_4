import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

import NonprofitsIndex from '../nonprofits/NonprofitsIndex';
import NonprofitsShow  from  '../nonprofits/NonprofitsShow';
import NonprofitsNew   from '../nonprofits/NonprofitsNew';
import NonprofitsEdit  from '../nonprofits/NonprofitsEdit';

import ProtectedRoute  from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/nonprofits" component={NonprofitsIndex} />
      <ProtectedRoute path="/nonprofits/new" component={NonprofitsNew} />
      <ProtectedRoute path="/nonprofits/:id/edit" component={NonprofitsEdit} />
      <Route path="/nonprofits/:id" component={NonprofitsShow} />
    </Switch>
  );
};

export default Routes;
