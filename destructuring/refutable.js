// refutable (default)
{a: x, b: y} = {a: 3}; // fails

// irrefutable
{a: x, ?b: y} = {a: 3}; // x = 3, y = undefined

// default value
{a: x, b: y=5} = {a: 3}; // x = 3, y = 5
