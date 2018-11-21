//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写；前提是要用immutable，不然会有问题
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/header';
import { GlobalStyle } from './style';
import { GlobaliconStyle } from './static/inonfont/iconfont.js';
import Home from './page/home';
import Details from './page/details/loadable.js';
import Login from './page/login/loadable.js';
import store from './store';


class App extends PureComponent {
  render() {
    return (      
      <Provider store={store}>
        <div>
          <GlobaliconStyle/>
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/details/:id" exact component={Details}></Route> 
              <Route path="/login" exact component={Login}></Route>
              {/* <Route path="/details" exact component={Details}></Route> */}

            </div>    
          </BrowserRouter>
        </div>
       
      </Provider>
    );
  }
}

export default App;
