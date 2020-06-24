import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UseCallbackContainer, UseMemoContainer, Posts } from 'pages';
import Menu from './components/Menu'

let style = {
  padding: '10px'
}

function App() {
  return (
    <>
      <div style={style}>
        <h1>hook study</h1>
        <div>
          <Menu />
          <Route exact path="/callback" component={UseCallbackContainer} />
          <Switch>
            <Route path="/memo/:name" component={UseMemoContainer} />
            <Route path="/memo" component={UseMemoContainer} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
