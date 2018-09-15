import dotRed from '../../assets/dot-red-no-shadow.svg';
import dotBlue from '../../assets/dot-blue-no-shadow.svg';
import dotGray from '../../assets/dot-gray-no-shadow.svg';

import wheelCarbon from '../../assets/wheel-carbon.png';
import wheelGrafitti from '../../assets/wheel-grafitti.png';
import wheelMetalic from '../../assets/wheel-metalic.png';

import engineImage from '../../assets/engine-1.png';
import engineImage2 from '../../assets/engine-2.png';

import colorRed from '../../assets/color-red.png';
import colorBlue from '../../assets/color-blue.png';
import colorGray from '../../assets/color-gray.png';

import finalRed from '../../assets/final-red.png';
import finalBlue from '../../assets/final-blue.png';
import finalGray from '../../assets/final-gray.png';

const getDot = (id) => {
  switch (id) {
    case 4:
      return dotRed;
    case 5:
      return dotBlue;
    default:
      return dotGray;
  }
};

const getWheel = (id) => {
  switch (id) {
    case 7:
      return wheelMetalic;
    case 8:
      return wheelGrafitti;
    default:
      return wheelCarbon;
  }
};

const getLinkNext = (path) => {
  switch (path) {
    case '/':
      return '/engine';
    case '/engine':
      return '/color';
    case '/color':
      return '/wheels';
    case '/wheels':
      return '/checkout';
    default:
      return '/';
  }
};

const getEngine = (id) => {
  switch (id) {
    case 2:
      return engineImage2;
    case 3:
      return engineImage2;
    default:
      return engineImage;
  }
};

const getColor = (id) => {
  switch (id) {
    case 4:
      return colorRed;
    case 5:
      return colorBlue;
    default:
      return colorGray;
  }
};

const getFinalCar = (id) => {
  switch (id) {
    case 4:
      return finalRed;
    case 5:
      return finalBlue;
    default:
      return finalGray;
  }
};

const getStateBar = (context) => {
  const { pathname } = context;
  if (pathname !== '/checkout' && pathname !== '/building' && pathname !== '/') return 'opened';
  return 'closed';
};

export {
  getDot, getWheel, getLinkNext, getStateBar, getEngine, getColor, getFinalCar,
};
