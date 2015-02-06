let idGenerator = (id=0)=> ()=> id++;

let nextFrom1000 = idGenerator(1000);

console.log(nextFrom1000()); // 1000
console.log(nextFrom1000()); // 1001
