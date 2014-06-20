function* zeroOneTwo() {
    yield 0;
    yield 1;
    yield 2;
}

var generator = zeroOneTwo();

for (var i of generator) {
    console.log(i);
}
