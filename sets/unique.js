// untested

var unique = [...new Set([1, 2, 0, 2, 3, 'A', 'B', 0, 'C', 'C', 'D'])];

console.log(unique); // [1, 2, 0, 3, 'A', 'B', 0, 'C', 'D']
