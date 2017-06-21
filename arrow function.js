console.log('with ES5')
var deliveryBoy = {
  name: 'Raunaq',
  handleMessage: function(message, handler) {
    handler(message);
  },
  receive: function() {
    this.handleMessage('The function passed as an arg is not bound to \'this\' by default ', function(message) {
      console.log(message + this.name);
    }.bind(this));
  }
}
deliveryBoy.receive();

console.log('\nwith ES6')
var deliveryBouy = {
  name: 'Raunaq',
  handleMessage: (message, handler) => handler(message),
  receive: function() {
    this.handleMessage(`Arrow functions are bound to 'this' by default `, (message) => console.log(message + this.name));
  }
}
deliveryBouy.receive();