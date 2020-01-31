// var Foo = {};

// Foo.bar = function () {
//     return "foobar";
// }

// module.exports   = Foo;

function* foo() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  
  var str = '';
  for (const val of foo()) {
    str = str + val;
  }

  module.exports = str;