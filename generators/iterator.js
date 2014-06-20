function* argumentsGenerator() {
    for (let i = 0; i < arguments.length; i += 1) {
        yield arguments[i];
    }
}

var it = argumentsGenerator('a','b','c');

console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: false }
console.log(it.next()); // { value: undefined, done: true}



for (let value of it) {
    console.log(value); // 'a'
}
