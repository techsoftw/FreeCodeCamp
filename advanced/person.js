var Person = function(name) {
  var firstAndLast = name;
  
  this.getFullName = function() {
    return firstAndLast;
  };
  
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };
  
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };
  
  this.setFullName = function(fullName) {
    firstAndLast = fullName;
  };
  
  this.setFirstName = function(first) {
    var i = firstAndLast.indexOf(' ');
    var old = firstAndLast.substr(0,i);
    firstAndLast = firstAndLast.replace(old,first);
  };
  
  this.setLastName = function(last) {
    var i = firstAndLast.indexOf(' ');
    var old = firstAndLast.substr(i+1);
    firstAndLast = firstAndLast.replace(old,last);
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
