const { experiment, test } = exports.lab = require('lab').script();
const assert = require('assert');
const { isMiddleClick } = require('../src/main');

experiment('isMiddleClick', () => {
  const macNavigator = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'
  };

  const anotherNavigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
  };

  test('should return true when which is 2', (done) => {
    const event = {
      which: 2
    };
    assert(isMiddleClick(event, macNavigator));
    done();
  });

  test('should return true when button is 4', (done) => {
    const event = {
      button: 4
    };
    assert(isMiddleClick(event, macNavigator));
    done();
  });

  test('should return false when wheel isnt pressed', (done) => {
    const event = {
      button: 1,
      which: 1
    };
    assert(!isMiddleClick(event, macNavigator));
    done();
  });

  test('should true when cmd on mac', (done) => {
    const event = {
      metaKey: true
    };
    assert(isMiddleClick(event, macNavigator));
    done();
  });

  test('should false when not cmd on mac', (done) => {
    const event = {
      metaKey: false
    };
    assert(!isMiddleClick(event, macNavigator));
    done();
  });

  test('should false when not cmd on no-mac', (done) => {
    const event = {
      ctrlKey: true
    };
    assert(isMiddleClick(event, anotherNavigator));
    done();
  });

  test('should false when not cmd on no-mac', (done) => {
    const event = {
      ctrlKey: false
    };
    assert(!isMiddleClick(event, anotherNavigator));
    done();
  });
});
