// untested

let idGenerator = (id=0) => {
                      let resetId = () => 0,
                          nextId = ()=> id++;
                      return {resetId, nextId}
                  };

var nextFrom1000 = idGenerator(1000);

console.log(nextFrom1000.nextId()); // 1000
console.log(nextFrom1000.nextId()); // 1001
console.log(nextFrom1000.resetId()); // 0
console.log(nextFrom1000.nextId()); // 1002
