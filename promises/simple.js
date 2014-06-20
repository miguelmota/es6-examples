// untested

var p = new Promise(function(resolve, reject) {
    resolve('a');
});

Promise.then(function(val) {
    console.log(val); // 'a'
}, function(err) {
    console.error(err);
});
