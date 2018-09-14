// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AnimatedSwitch, spring } from 'react-router-transition';
import styled from 'styled-components';
import idx from 'idx';

import { getCars } from './actions';

import { getLinkNext, getStateBar } from './utils/js/utils';

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
  transition: opacity 1s ease;
  transition-delay: 1s;
  opacity: ${props => (props.visible ? '1' : '0')};
`;

const Content = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

const initialCar = {
  price: 63000,
  total: 63000,
  name: 'Model R',
  engine: {
    id: 1,
    image: 'https://bit.ly/2wAFr4z',
    kwh: 75,
    price: 0,
    range: 275,
    type: 'P',
  },
  wheels: {
    id: 7,
    image: 'https://bit.ly/2Plx6sb',
    label: '20" Silver Metalic',
    price: 0,
  },
  color: {
    hexadecimal: '#AB1725',
    id: 4,
    image: 'https://bit.ly/2LHJ3WT',
    label: 'Metalic Vermilion',
    price: 0,
  },
};

class App extends Component {
  state = {
    visible: false,
  };

  // wrap the `spring` helper to use a bouncy config
  bounce = val => spring(val, {
    stiffness: 330,
    damping: 22,
  });

  // we need to map the `scale` prop we define below
  // to the transform style property
  mapStyles = styles => ({
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  });

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

  componentDidMount() {
    this.setState({
      ...this.state,
      visible: true,
      selected: initialCar,
    });
    getCars()
      .then((res) => {
        this.setState({
          ...this.state,
          car: res,
        });
      })
      .catch(err => console.log(err));
  }

  setEngine = (newEngine) => {
    const { selected } = this.state;
    const { color, wheels, price } = selected;
    this.setState({
      ...this.state,
      selected: {
        ...selected,
        engine: newEngine,
        total: price + newEngine.price + color.price + wheels.price,
      },
    });
  }

  setColor = (newColor) => {
    const { selected } = this.state;
    const { engine, wheels, price } = selected;
    this.setState({
      ...this.state,
      selected: {
        ...selected,
        color: newColor,
        total: price + engine.price + newColor.price + wheels.price,
      },
    });
  }

  setWheels = (newWheels) => {
    const { selected } = this.state;
    const { engine, color, price } = selected;
    this.setState({
      ...this.state,
      selected: {
        ...selected,
        wheels: newWheels,
        total: price + engine.price + color.price + newWheels.price,
      },
    });
  }

  restart = () => {
    this.setState({
      ...this.state,
      selected: initialCar,
    });
  }

  render() {
    const selectedOptions = idx(this.state, _ => _.selected) || {};
    const car = idx(this.state, _ => _.car.data) || {};
    const location = idx(this.props, _ => _.location) || {};
    const { pathname } = location;
    const { visible } = this.state;
    return (
      <AppWrapper visible={visible}>
        <Header />
        <Content>
          <AnimatedSwitch
            atEnter={this.bounceTransition.atEnter}
            atLeave={this.bounceTransition.atLeave}
            atActive={this.bounceTransition.atActive}
            mapStyles={this.mapStyles}
            className="switch-wrapper"
          >
            <Route exact path="/" render={() => <Home />} />
            <Route path="/engine" render={() => <Engine engine={car.engine} selected={selectedOptions} setEngine={this.setEngine} />} />
            <Route path="/color" render={() => <Color color={car.color} selected={selectedOptions} setColor={this.setColor} />} />
            <Route path="/wheels" render={() => <Wheels wheels={car.wheels} selected={selectedOptions} setWheels={this.setWheels} />} />
            <Route path="/checkout" render={() => <Checkout selected={selectedOptions} restart={this.restart} />} />
          </AnimatedSwitch>
        </Content>
        <Bar status={getStateBar(location)} next={getLinkNext(pathname)} selected={selectedOptions} />
      </AppWrapper>
    );
  }
}

export default withRouter(App);
