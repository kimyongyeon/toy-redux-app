import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UseCallbackContainer, UseMemoContainer, Posts, UseRefContainer } from 'pages';
import Menu from './components/Menu'

// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';

// **** (1) Provider 불러오기
import { Provider } from 'react-redux';

// **** (2) 스토어를 만들고 현재 값 확인해보기
// const store = createStore(rootReducer);
// console.log(store.getState());

// **** 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState());


let style = {
  padding: '10px'
}

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={style}>
          <h1>hook study</h1>
          <div>
            <Menu />
            <Route exact path="/callback" component={UseCallbackContainer} />
            <Switch>
              <Route path="/memo/:name" component={UseMemoContainer} />
              <Route path="/memo" component={UseMemoContainer} />
              <Route path="/posts" component={Posts} />
              <Route path="/useRefContainer" component={UseRefContainer} />
            </Switch>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
