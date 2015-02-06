// untested

function f(x,y,z) {
    console.log(arguments);
}

var args = [0,1,2];

f(...args);




function g(a,b,c,d,e) {
    console.log(arguments);
}

var nums = [1,2,3];

g(0, ...nums, 4);


// Equivalent to Math.max.apply(null, [4,2,6])
console.log(Math.max(...[4,2,6]));
