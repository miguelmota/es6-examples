var fs = require('fs');
var path = require('path');
var Promise = require('es6-promise').Promise;

function async(makeGenerator) {
    return function() {
        var generator = makeGenerator.apply(this, arguments);

        function handle(result) {
            if (result.done)  return result.value;

            return result.value.then(function(res) {
                return handle(generator.next(res));
            }, function(err) {
                return handle(generator.throw(err));
            });
        }

        return handle(generator.next());
    };
}

function readJSON(filename) {
    return readFile(filename, 'utf8').then(JSON.parse);
}

function readFile(filename, enc) {
    return new Promise(function(fulfill, reject) {
        fs.readFile(filename, enc, function(err, res) {
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

readJSON(path.resolve('test.json')).then(function(data) {
    console.log(data);
});
