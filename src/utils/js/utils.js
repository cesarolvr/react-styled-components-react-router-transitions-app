import dotRed from '../../utils/assets/dot-red-no-shadow.svg';
import dotBlue from '../../utils/assets/dot-blue-no-shadow.svg';
import dotGray from '../../utils/assets/dot-gray-no-shadow.svg';

import wheelCarbon from '../../utils/assets/wheel-carbon.png';
import wheelGrafitti from '../../utils/assets/wheel-grafitti.png';
import wheelMetalic from '../../utils/assets/wheel-metalic.png';

const getDot = id => {
  switch(id) {
    case 4:
        return dotRed
    case 5:
      return dotBlue
    default:
      return dotGray
  }
}

const getWheel = id => {
  switch(id) {
    case 7:
        return wheelMetalic
    case 8:
      return wheelGrafitti
    default:
      return wheelCarbon
  }
}

const getLinkNext = (path) => {
  switch (path) {
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

const getStateBar = context => {
  const { pathname } = context;
  if (pathname !== '/checkout' && pathname !== '/') return 'opened';
  return 'closed';
}


export { getDot, getWheel, getLinkNext, getStateBar }