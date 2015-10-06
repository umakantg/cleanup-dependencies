#! /usr/bin/env node

var process = require('process');
process.chdir('./test');

var cli = require('../index.js');
cli
// should print a message "Successfully cleaned up these un-used dependencies :  [ 'abcd', 'xyz', 'pqr' ]"
// and package.json's dependencies element should be updated to NOT show abcd,xyz and pqr. 
