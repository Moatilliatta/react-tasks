import React from 'react';
import AppBuilder from './containers/AppBuilder/AppBuilder';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/Results/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={AppBuilder} />
          <Route path="/search/:query?" component={AppBuilder} />
          <Route path="/film/:id?" component={AppBuilder} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
