var zetta = require('zetta');

var DCMotor= require('../index.js');


zetta()
  
.use(DCMotor)
   
.listen(1337);
