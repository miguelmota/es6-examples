function* demo() {
    yield 10;
}

var d = demo();
console.log(d.next()); // value: 10, done: false }
d.throw(new Error('foo')); // Error: foo
