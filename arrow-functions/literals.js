// untested

let idGenerator = (id=0)=>
    (resetId = () => 0,
     nextId = ()=> id++,
     {resetId, nextId});

var nextFrom1000 = idGenerator(1000);

console.log(nextFrom1000.nextId()); // 1000
