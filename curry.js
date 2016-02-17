function greet (gender, age, name) {
    // if a male, use Mr. else use Ms.
    var salutation = gender === "male" ? "Mr." : "Mrs.";

    if (age > 25) {
        return "Hello, " + salutation + " " + name;
    }
    else {
        return "Hey, " + name;
    }
}

// so we are passing null because we are not using the "this" keyword in our greet function
var greetAnAdultMale = greet.bind (null, "male", 45);

// when we use the bind method for currying, all of the parameters of the function, except for
// the rightmost one are preset, so it is the rightmost argument we are changing when we pass
// arguments to the greet function
console.log(greetAnAdultMale("John Hartlove"));

var greetAYoungster = greet.bind(null, "female", 12);
console.log(greetAYoungster("Josephine"));
console.log(greetAYoungster("Nancy Drew"));
