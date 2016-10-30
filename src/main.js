const isMiddleClick = (event, nav = navigator) => {
  const isWheelPressed = event.which === 2 || event.button === 4;
  if (isWheelPressed) {
    return true;
  }

  // check ctrl/cmd key
  const prop = nav.userAgent.indexOf('Mac') !== -1 ? 'metaKey' : 'ctrlKey';
  return event[prop] === true;
}

// to support es6 import { isMiddleClick } from 'middle-click'
module.exports = { isMiddleClick };
