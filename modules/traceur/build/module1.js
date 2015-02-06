"use strict";
Object.defineProperties(exports, {
  test: {get: function() {
      return test;
    }},
  MyClass: {get: function() {
      return MyClass;
    }},
  __esModule: {value: true}
});
var test = 'es6';
var MyClass = function MyClass() {
  console.log('class');
};
($traceurRuntime.createClass)(MyClass, {}, {});
;
