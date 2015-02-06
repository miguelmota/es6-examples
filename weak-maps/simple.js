let wm = new WeakMap();

let o1 = {};

wm.set(o1, 'a');

console.log(wm.get(o1)); // 'a'



let wm = new WeakMap();

let o1 = {};

wm.set(o1, 'a');

console.log(wm.get(o1)); // 'a'



let o2 = function(){};

wm.set(o2, 'b');

console.log(wm.get(o2)); // 'b'



let o3 = [];

wm.set(o3, 'c');

console.log(wm.get(o3)); // 'c'



let o4 = new WeakMap();

wm.set(o4, 'd');

console.log(wm.get(o4)); // 'd'



let o5 = 'howdy';

wm.set(o5, 'd');

console.log(wm.get(o5)); // TypeError: Invalid value used as weak map key



let o6 = 123;

wm.set(o6, 'e');

console.log(wm.get(o6)); // TypeError: Invalid value used as weak map key



let o7 = null;

wm.set(o7, 'f');

console.log(wm.get(o7)); // TypeError: Invalid value used as weak map key
