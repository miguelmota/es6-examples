// untested

let identity = (() => ({'toString': () => { return 'Kit' } }));

console.log(`${identity()}`); // 'Kit'



let sumSquares = [for (x of [1,2,3]) x*x].reduce((a, b) => a + b);

console.log(sumSquares); // 14
