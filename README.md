#Mock DCMotor Device This is a mock DCMotor device for use in the Zetta platform



##Installation

`npm install zetta-

dcmotor-mock-driver`



##Usage

To use simply call the `use()` function in your code to use this device.

```javascript
var zetta 

= require('zetta');
var dcmotor = require('zetta-dcmotor-mock-driver');

zetta()
  .use(dcmotor)
  .listen(1337);
```
