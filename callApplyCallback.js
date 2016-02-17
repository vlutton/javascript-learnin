// define an object with some properties
// we will later pass the method as a callback to another function
var clientData = {
  id: 094545,
  fullName: "not set",
  // set userName is a method on the clientData object
  setUserName: function (firstName, lastName) {
    // "this" refers to the fullname on the object
    this.fullName = firstName + " " + lastName;
  }
};

function getUserInput (firstName, lastName, callback, callbackObj) {
  // the apply() function below will set the "this" value to callbackObj
  callback.apply(callbackObj, [firstName, lastName]);
}

// the clientData object will be used by the Apply method to set the "this" value
getUserInput("Barack", "Obama", clientData.setUserName, clientData);
// the fullName on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama
