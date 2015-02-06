function* fibonacci() {
    var previous = 0, current = 1;
    while (true) {
        var temp = previous;
        previous =  current;
        current = temp + current;
        yield current;
    }
}

for (var i of fibonacci()) {
    console.log(i); // 1, 2, ... Infinity
    if (i > 5000) {
      break;
    }
}
