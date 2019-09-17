Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    let temp = projectionFunction(itemInArray);

    results.push(temp);

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
