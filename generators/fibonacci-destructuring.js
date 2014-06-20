// untested

function* fibonacci() {
    let a = 0, b = 1;

    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

for (let value of fibonacci()) {
    console.log(value);
}
