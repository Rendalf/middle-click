# middle-click

Simple library for detect `middle-click` events, that should open link in new window.
It is useful for SPA.

## Installation

`npm i -S middle-click`

## Usage

```
import { isMiddleClick } from 'middle-click';
// or const isMiddleClick = require('middle-click');

someElement.addEventListener('click', event => {
  ...
  if (isMiddleClick(event)) {
    doOpenInNewWindow();
  } else {
    doOpenInThisWinodw();
  }
});
```
