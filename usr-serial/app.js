const usr=require('./discoverusr');
var serial = require('./serialio');

usr.discoverDevices();
serial.write('guguseli');
