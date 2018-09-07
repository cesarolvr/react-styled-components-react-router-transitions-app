import React, { Component } from 'react';
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
  render() {
    return (
      <AppWrapper>
        <Header />
        <Content>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Content>
        <Bar />
      </AppWrapper>
    );
  }
}

export default App;
