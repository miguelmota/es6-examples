// untested

let specialMethod = Symbol();
let obj = {
    // computed property key
    [specialMethod]: function(arg) {

    }
};
obj[specialMethod](123);


// short method definition
let obj = {
    [specialMethod](arg) {

    }
};
