// global variable for demonstration
var avgScore = "global avgScore";

// global function
function avg (arrayOfScores) {
  // add all of the scores and return a total
  var sumOfScores = arrayOfScores.reduce(function (prev, cur, index, array) {
    return prev + cur;
  });

  // the "this" keyword here will be bound to the global object, unless we set
  // the "this" with Call or Apply
  this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null
};

// if we execute the avg function thus, "this" inside the function is bound to
// the global window object
avg(gameController.scores);

// Proof that the avg score was set on global window object
console.log(window.avgScore); // 46.4
console.log(gameController.avgScore); // null

// reset the global avgScore
avgScore = "global avgScore";

// To set the "this" value explicitly, so that "this" is bound to the gameController
// we use the call() method
avg.call(gameController, gameController.scores);

console.log(window.avgScore); // global avgScore
console.log(gameController.avgScore); // 46.4

// call method:
// the first argument sets the "this" value, in preceding example it was set to
// the gameController object, the other arguments after the first argument are
// passed as parameters to the avg() function
