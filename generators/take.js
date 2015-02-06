function* count(start) {
    let i = start || 0;
    while(true) {
        yield i++;
    }
}

function* take(iterable, numToTake) {
    var i = 0;
    for (var taken of iterable) {
        if (i++ === numToTake) {
            return;
        }
        yield taken;
    }
}

for (var i of take(count(10), 5)) {
    console.log(i); // 10, 11, 12, 13, 14
}
