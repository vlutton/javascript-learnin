console.log("Begin binding exercises!");
// this data is a global variable
var data = [
    {
        name: "Samantha",
        age: 12
    },
    {
        name: "Josephine",
        age: 1
    }
];

var user = {
    data        :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData: function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

var showDataVar = user.showData.bind(user);

// this will pull the data from the user object since we passed in user
showDataVar ();

var cars = {
    data: [
        {name: "Honda Accord", age:14},
        {name: "Tesla Model S", age: 2}
    ]
};
// Don't do this, if the cars object has a method called 'showData' it will be overwritten!
// instead use the 'Apply' or 'Call' methods
var showCarData = user.showData.bind(cars);
showCarData();
console.log("End binding exercises");
