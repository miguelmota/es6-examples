// untested

function echo({a=1, b=2, c=3}) {
    console.log(a, b, c);
}

echo(); // 1, 2, 3
echo({a:7,b:8,c:9}); // 7, 8, 9
