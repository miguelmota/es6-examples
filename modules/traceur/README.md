### installing tracuer

```
npm install -g traceur
```

### tracuer on the server

```
traceur --dir ./src build/ --modules=commonjs

node index.js
```

### tracuer build on the browser

```
traceur --out index.build.js src/*

open index.html
```

### module loader

```
open module-loader.html
```

### loading compiled modules

```
traceur --out js-build.js src/* --modules=instantiate

open module-loader2.html
```
