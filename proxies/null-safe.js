// untested

var Obj = Function();
var nullProxy = Proxy(
    {toString: ()=> 'nullProxy'},
    {get: (t,p) => t[p] || new Obj() }
);
Obj.prototype = nullProxy;

var sale = Object.create(nullProxy /*, data */);
var lastName = sale.contact.last.name;
console.log(lastName); // 'nullproxy'
