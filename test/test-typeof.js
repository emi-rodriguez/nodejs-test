var assert    = require('assert');

var bar = function(){}

try {

    assert.equal('string', typeof 'ajsdiajdw');
    assert.equal('number', typeof 42);
    assert.equal('boolean', typeof true);
    assert.equal('undefined', typeof foo);
    assert.equal('object', typeof {});
    assert.equal('function', typeof bar);
    assert.equal('symbol', typeof Symbol());

} catch(e) {
    console.log(e);
}