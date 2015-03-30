let obj = {foo: 123};
let merged = Object.assign(obj, {bar: true}, {qux: 'baz'});

console.log(merged); // {foo: 123, bar: true, qux: 'baz}
