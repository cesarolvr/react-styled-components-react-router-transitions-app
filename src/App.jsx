import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppIntro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <AppWrapper>
        <Header />
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
