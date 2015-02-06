function* zeroOneTwo() {
    yield 0;
    yield 1;
    yield 2;
}

var generator = zeroOneTwo();

console.log(generator.next()); // { value: 0, done: false }
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: undefined, done: true }

generator = zeroOneTwo();

for (let i of generator) {
    console.log(i); // 0, 1, 2
}
