app.factory('suggestions', [function(){
  var demoSuggestions = {
    posts: [
      {
        title: 'Organise offsite meeting with shashlick and badminton',
        upvotes: 15,
        comments: [],
      },
      {
        title: 'Organise sport event - cycling, rollerblading, volleyball tournament',
        upvotes: 9,
        comments: [],
      },
      {
        title: 'Purchase Ping Pong table',
        upvotes: 7,
        comments: [],
      },
      {
        title: 'Play lasertag, paintball',
        upvotes: 3,
        comments: [],
      }
    ]
  };
  return demoSuggestions;
}]);