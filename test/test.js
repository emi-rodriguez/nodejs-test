var assert    = require('assert');
var foo = require('../index.js');

try {

    assert.equal('abc', foo);

} catch(e) {
    console.log(e);
}