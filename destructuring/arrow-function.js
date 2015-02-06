// untested

var headers = {
    'Content-Type': 'application/json'
}

({'request': {headers}}) => headers

console.log(request['Content-Type']); // 'application/json'
