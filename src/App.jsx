import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import { AnimatedSwitch, spring } from 'react-router-transition';
import styled from 'styled-components';
import idx from 'idx';

import { getCars } from './actions';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Engine from './components/Engine/Engine';
import Color from './components/Color/Color';
import Wheels from './components/Wheels/Wheels';
import Checkout from './components/Checkout/Checkout';
import Bar from './components/Bar/Bar';

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
  height: 100%;
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

  verifyBar = () => {
    const location = idx(this.props, _ => _.location) || {};
    const { pathname } = location;
    if (pathname !== '/checkout' && pathname !== '/') return 'opened';
    return 'closed';
  }

  // child matches will...
  bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: this.bounce(0),
      scale: this.bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: this.bounce(1),
      scale: this.bounce(1),
    },
  };

  // wrap the `spring` helper to use a bouncy config
  bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  // we need to map the `scale` prop we define below
  // to the transform style property
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  getLinkNext = (path) => {
    switch(path) {
      case '/':
          return '/engine'
      case '/engine':
        return '/color'
      case '/color':
        return '/wheels'
      case '/wheels':
        return '/checkout'
      default:
        return '/'
    }
  }

  render() {
    const car = idx(this.state, _ => _.car.data) || {};
    const location = idx(this.props, _ => _.location) || {};
    const { pathname } = location;
    return (
        <AppWrapper>
          <Header />
          <Content>
            <AnimatedSwitch
              atEnter={this.bounceTransition.atEnter}
              atLeave={this.bounceTransition.atLeave}
              atActive={this.bounceTransition.atActive}
              mapStyles={this.mapStyles}
              className="switch-wrapper"
            >
              <Route exact path="/" component={() => <Home />} />
              <Route path="/engine" component={ () => <Engine engine={car.engine} /> } />
              <Route path="/color" component={ () => <Color color={car.color} /> } />
              <Route path="/wheels" component={ () => <Wheels wheels={car.wheels} /> } />
              <Route path="/checkout" component={ () => <Checkout car={car} /> } />
            </AnimatedSwitch>
          </Content>
          <Bar status={this.verifyBar()} next={this.getLinkNext(pathname)} />
        </AppWrapper>
    );
  }
}

export default withRouter(App);
