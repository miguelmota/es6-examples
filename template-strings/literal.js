// untested

var toaster  = {
    food: null,
    toast() {
        return `toasting ${this.food}`;
    }
}

var toaster1 = Object.create(toaster);
var toaster2 = Object.create(toaster);

toaster1.food = 'toast';
toaster2.food = 'bagels';

console.log(toaster1.toast()) // 'toasting toast'
console.log(toaster2.toast()) // 'toasting bagels'
