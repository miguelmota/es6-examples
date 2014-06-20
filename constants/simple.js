const CANT_TOUCH_THIS = 'foo';

console.log(CANT_TOUCH_THIS);

CANT_TOUCH_THIS = 'bar'; // SyntaxError: Assignment to constant variable.
