// with ES5
var receive = function(complete) {
  complete();
}
receive(function() { console.log('no default params with ES5\n') });

// with ES6
receive = function(complete = () => console.log('default params with ES6\n')) {
  complete();
}
receive();
receive(() => console.log('overwriting default params with this smh\n'));

// with cray cray ES6
receive = (complete = () => console.log('default params with cray ES6')) => complete();
receive();