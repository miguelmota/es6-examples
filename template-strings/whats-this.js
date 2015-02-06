// untested

var whatsThis = func`${x} + ${y}\n= ${x + y}`

// compiles to

var whatsThis = func(
    {
        raw: ['', ' + ', '\\n = ', ''],
        cooked: ['', ' + ', '\n = ', '']
    },
    x,
    y,
    x + y
);


var els = qsa`.${className}`

function qsa({raw: cooked}, ...vars) {
    // raw[0] ends in '.' so vars[0] ends to be escaped like a css class
}
