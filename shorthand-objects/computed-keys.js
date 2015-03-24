var obj = {
  ['foo'+'bar']() {
    return 'Hello, World';
  }
};

console.log(obj.foobar());
