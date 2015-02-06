function* demo() {
    var res = yield 10;
    return 42;
}

var d = demo();
var resA = d.next();
console.log(resA); // { value: 10, done: false }
var resB = d.next();
console.log(resB); // { value: 42, done: true }
