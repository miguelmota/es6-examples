var storage = new WeakMap();

function store(element, name, value) {
    if (!storage.has(element)) {
        storage.set(element, new WeakMap());
    }

    storage.get(element).set(name, value);
    return element;
}

function retrieve(element, name) {
    if (!storage.has(element)) {
        return;
    }
    return storage.get(element).get(name);
}

function unstore(element, name) {
    if (!storage.get(element)) {
        return;
    }
    let data = storage.get(element);
    let value = data.get(name);
    data.delete(name);
    return value;
}

function clearStore(element) {
    if (!storage.get(element)) {
        return;
    }
    storage.get(element).clear();
}


let el = {}; // Theoretically, this would be a DOM element
let k = {};

store(el, k, 'a');

console.log(retrieve(el, k)); // 'a'

unstore(el, k);

console.log(retrieve(el, k)); // undefined

store(el, k, 'b');

console.log(retrieve(el, k)); // 'b'

clearStore(el);

console.log(retrieve(el, k)); // undefined
