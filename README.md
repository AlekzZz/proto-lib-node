# Prototype Based (MVC) Library
Classless prototypal MVC Library for node.

### Controller Usage
When creating your controllers based on "proto-lib" controller, e.g. `app/controllers/MyController/index.js`, your defaults will be deep merged into `options` object in your instance.
```javascript
const Lib = require('proto-lib-node');
const { Controller } = Lib;

const MyController = Controller({
  defaults: {
    myPropA: 'a',
    myPropB: 'b'
  },

  myMethod() {
    let { options: { myPropA, myPropB } } = this;

    return `${myPropA} ${myPropB}`;
  }
});

module.exports = MyController;
```

To initialize you controller:
```
const MyController = require('app/controllers/MyController');
const myControllerInstance = MyController();

/*
  myControllerInstance will be equal to:
  {
    options: {
      myPropA: 'a',
      myPropB: 'b'
    },
    myMethod: function...
  }
*/

myControllerInstance.myMethod(); // will output "a b"
```

You can override your defaults by providing options to each instance of MyController:
```
const MyController = require('app/controllers/MyController');
const myControllerInstance = MyController({
  myPropB: 'b2',
  myPropC: 'c',
  myMethod2() {
    let { options: { myPropA, myPropB, myPropC } } = this;

    return `${myPropA} ${myPropB} ${myPropC}`;
  }
});

/*
  myControllerInstance will be equal to:
  {
    options: {
      myPropA: 'a',
      myPropB: 'b2',
      myPropC: 'c'
    },
    myMethod: function...,
    myMethod2: function...
  }
*/

myControllerInstance.myMethod(); // will output "a b2"
myControllerInstance.myMethod2(); // will output "a b2 c"
```