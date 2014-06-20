// untested

var p1 = new Promise(function(resolve, reject) { setTimeout(resolve, 500, 'one'); });
var p2 = new Promise(function(resolve, reject) { setTimeout(resolve, 100, 'two'); });

Promise.all([p1, p2]).then(function(values) {
    console.log(values); // ['one', 'two']
});
