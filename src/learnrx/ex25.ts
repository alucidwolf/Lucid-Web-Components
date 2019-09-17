Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    results.push.apply(results, subArray);
  });

  return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return (
    this.map(function(item) {
      return projectionFunctionThatReturnsArray(item);
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return a new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
    })
      // apply the concatAll function to flatten the two-dimensional array
      .concatAll()
  );
};

function Test25() {
  var lists = [
      {
        id: 5434364,
        name: "New Releases"
      },
      {
        id: 65456475,
        name: "Thrillers"
      }
    ],
    videos = [
      {
        listId: 5434364,
        id: 65432445,
        title: "The Chamber"
      },
      {
        listId: 5434364,
        id: 675465,
        title: "Fracture"
      },
      {
        listId: 65456475,
        id: 70111470,
        title: "Die Hard"
      },
      {
        listId: 65456475,
        id: 654356453,
        title: "Bad Boys"
      }
    ];

  return lists.map(list => {
    return {
      name: list.name,
      videos: videos
        .filter(video => {
          return video.listId === list.id;
        })
        .map(video => {
          return {
            id: video.id,
            title: video.title
          };
        })
    };
  });

  //   return lists.map(function(list) {
  //     return {
  //       name: list.name,
  //       videos: videos
  //         .filter(function(video) {
  //           return video.listId === list.id;
  //         })
  //         .map(function(video) {
  //           return { id: video.id, title: video.title };
  //         })
  //     };
  //   });
}

console.log(Test25());
