// untested

function fun(arg0, {opt1, opts2}) {
    return [opt1, opt2];
}
// {opt1, opt2} is the sames as {opt1:opt1,opt2:opt2}

fun(0,{opt1:'a',opt2:'b'}); // ['a','b']
