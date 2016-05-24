app.controller('HomeController',[
  '$scope',
  'suggestions',
  function($scope,suggestions){
    $scope.isDisabled = false;
    $scope.posts = suggestions.posts;
    $scope.addSuggestion = function(){
      if($scope.title){
        $scope.posts.push({
          title: $scope.title,
          upvotes: 0,
          comments: []
        });
      };
      $scope.title = '';
    };
    $scope.upVote = function(post){
      if(!$scope.isDisabled){
        post.upvotes += 1;
        $scope.isDisabled = true;
      }
    }
  }
  ]
);
