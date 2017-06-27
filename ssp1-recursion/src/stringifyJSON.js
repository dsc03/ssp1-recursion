// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here; 
  var newArr = [];

    if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
        return '' + obj; //'4'

   if (Array.isArray(obj)) {
    obj.forEach(function(item) {
      newArr.push(stringifyJSON(item));
    });
    return `[${newArr}]`;
  }
  
  if (obj instanceof Object) {
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }
      newArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + newArr.join() + '}';
  }

};



