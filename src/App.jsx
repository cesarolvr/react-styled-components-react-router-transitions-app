import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Bar from './components/Bar/Bar';

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  background: #fff;
  flex-grow: 1;
`;

class App extends Component {
  onlyToLieToEslint = () => {
    console.log('ók');
  }

  render() {
    return (
      <AppWrapper>
        <Header />
        <Router>
          <Content>
              <Route exact path="/" component={ () => <h1>Home</h1> } />
              <Route path="/engine" component={ () => <h1>Engine</h1> } />
              <Route path="/color" component={ () => <h1>Color</h1> } />
              <Route path="/wheels" component={ () => <h1>Color</h1> } />
              <Route path="/checkout" component={ () => <h1>Checkout</h1> } />
          </Content>
        </Router>
        <Bar />
      </AppWrapper>
    );
  }
}

export default App;
