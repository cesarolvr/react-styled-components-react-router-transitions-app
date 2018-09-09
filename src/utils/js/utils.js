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


export { getDot, getWheel }