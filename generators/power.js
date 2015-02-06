var pow = (function *() {
    return Math.pow(yield 'x', yield 'y');
}());

// first next must be empty to initialize iterator
// http://stackoverflow.com/questions/20977379/es6-yield-what-happens-to-the-arguments-of-the-first-call-next
console.log(pow.next()); // { value: 'x', done: false }
console.log(pow.next(2)); // { value: 'y', done: false }
console.log(pow.next(3)); // { value: 8, done: true }
