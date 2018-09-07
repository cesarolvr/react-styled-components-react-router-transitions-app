import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Bar = styled.div`
  background: #3d3d3d;
  padding: 30px;
`;

const Content = styled.div`
  background: #eee;
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
