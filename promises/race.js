// untested

var p1 = new Promise(function(resolve, reject) { setTimeout(resolve, 500, 'one'); });
var p2 = new Promise(function(resolve, reject) { setTimeout(resolve, 100, 'two'); });

Promise.race([p1, p2]).then(function(value) {
    console.log(value); // 'two'
});
