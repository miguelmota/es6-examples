System.register("src/module1", [], function($__0) {
  "use strict";
  var __moduleName = "src/module1";
  var test,
      MyClass;
  return {
    exports: {
      get test() {
        return test;
      },
      get MyClass() {
        return MyClass;
      },
      set test(value) {
        test = value;
      },
      set MyClass(value) {
        MyClass = value;
      }
    },
    execute: function() {
      test = 'es6';
      MyClass = (function() {
        var MyClass = function MyClass() {
          console.log('class');
        };
        return ($traceurRuntime.createClass)(MyClass, {}, {});
      }());
      ;
    }
  };
});
System.register("src/module2", ["./module1"], function($__2) {
  "use strict";
  var __moduleName = "src/module2";
  return {
    exports: {},
    execute: function() {
      ;
      console.log($__2[0]["test"]);
      new $__2[0]["MyClass"]();
    }
  };
});
