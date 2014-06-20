// untested

function smartArray(arr) {
    return Proxy(
        arr,
        {get: function(p,x) {
            if (Number(x) < 0) {
                return p[p.length + Number(x)];
            }
            return p[x];
        }}
    );
}

var arr = smartArray([1,2,3]);

console.log(arr[0]); // 1
console.log(arr[-1]); // 3
