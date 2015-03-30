// untested

let set1 = new Set();
set1.add('hello');
console.log(set1.has('hello')); // true

let set2 = new Set([3,2,1,'a']);
console.log(set2.values()); // 1,2,3,'a'

for (let elem of set2) {
  console.log(elem);
}
