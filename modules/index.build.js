System.register("src/module1", [], function() {
  "use strict";
  var __moduleName = "src/module1";
  var test = 'es6';
  var MyClass = function MyClass() {
    console.log('class');
  };
  ($traceurRuntime.createClass)(MyClass, {}, {});
  ;
  return {
    get test() {
      return test;
    },
    get MyClass() {
      return MyClass;
    }
  };
});
System.get("src/module1" + '');
System.register("src/module2", [], function() {
  "use strict";
  var __moduleName = "src/module2";
  var $__1 = System.get("src/module1"),
      test = $__1.test,
      MyClass = $__1.MyClass;
  console.log(test);
  new MyClass();
  return {};
});
System.get("src/module2" + '');
