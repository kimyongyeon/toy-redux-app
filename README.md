# react-router

\$ yarn add react-router-dom  
\$ yarn add cross-env --dev

## exact: 중복 화면 제거

```
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UseCallbackContainer, UseMemoContainer } from 'pages';

let style = {
  padding: '10px'
}

function App() {
  return (
    <>
      <div style={style}>
        <h1>hook study</h1>
        <div>
          <Route exact path="/callback" component={UseCallbackContainer} />
          <Switch>
            <Route path="/memo/:name" component={UseMemoContainer} />
            <Route path="/memo" component={UseMemoContainer} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
```

## 라우터 파라미터 읽기

- params
- query
- props
  - history: push, replace
  - location: /about?foo=bar
  - match: /about/:name

## Switch : 중복 화면 제거

## URL 쿼리

\$ yarn add query-string

```
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UseCallbackContainer, UseMemoContainer } from 'pages';

let style = {
  padding: '10px'
}

function App() {
  return (
    <>
      <div style={style}>
        <h1>hook study</h1>
        <div>
          <Route exact path="/callback" component={UseCallbackContainer} />
          <Switch>
            <Route path="/memo/:name" component={UseMemoContainer} />
            <Route path="/memo" component={UseMemoContainer} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
```

앱 내에서 다른 라우트로 이동 할 때에는, 일반 <a href...>foo</a> 형식으로 하면 안됩니다. 왜냐하면, 이렇게하면 새로고침을 해버리기 때문이지요.

## Link 컴포넌트

클래스, 스타일 지정 불가

## NavLink 컴포넌트

```
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
```

이 컴포넌트에 전달되는 props 들은 컴포넌트 내부의 DOM 에도 전달이 되므로, 일반 DOM 엘리먼트에 설정 하는 것 처럼 className, style 혹은 onClick 등의 이벤트를 전달 해 줄 수 있습니다.

NavLink 컴포넌트는 Link 랑 비슷한데요, 만약에 설정한 URL 이 활성화가 되면, 특정 스타일 혹은 클래스를 지정 할 수 있습니다.

## 라우트 속의 라우트
