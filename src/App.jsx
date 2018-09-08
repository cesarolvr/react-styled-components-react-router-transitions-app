import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import { getCars } from './actions';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

class App extends Component {
  componentDidMount(){
    getCars()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Router>
        <AppWrapper>
          <Header />
            <Content>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/engine" component={ () => <h1>Engine</h1> } />
                <Route path="/color" component={ () => <h1>Color</h1> } />
                <Route path="/wheels" component={ () => <h1>Color</h1> } />
                <Route path="/checkout" component={ () => <h1>Checkout</h1> } />
            </Content>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
