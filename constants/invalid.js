// untested

function f() {
    // with this in place..
    const g = false;

    // you can't do this
    const g = true; // SyntaxError: Variable 'g' has already been declared

    // or this
    g = true; // SyntaxError: Assignment to constant variable.

    // or this
    var g = false; // SyntaxError: Variable 'g' has already been declared

    // or this
    let g = false; // SyntaxError: Variable 'g' has already been declared
}

f();
