import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import idx from 'idx';

import { getCars } from './actions';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Engine from './components/Engine/Engine';
import Color from './components/Color/Color';
import Wheels from './components/Wheels/Wheels';
import Checkout from './components/Checkout/Checkout';

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
      .then(res => {
        this.setState({
          car: res,
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    const car = idx(this.state, _ => _.car) || {};
    return (
      <Router>
        <AppWrapper>
          <Header />
            <Content>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/engine" component={ () => <Engine car={car} /> } />
                <Route path="/color" component={ () => <Color car={car} /> } />
                <Route path="/wheels" component={ () => <Wheels car={car} /> } />
                <Route path="/checkout" component={ () => <Checkout car={car} /> } />
            </Content>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
