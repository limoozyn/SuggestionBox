app.controller('SuggestionController',[
  '$scope',
  '$routeParams',
  'suggestions',
  function($scope,$routeParams,suggestions){
    $scope.isDisabled = false;
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.addComment = function(){
      if($scope.body){
        $scope.post.comments.push({
          body: $scope.body,
          upvotes: 0
        });
      };
      $scope.body = '';
    };
    
    $scope.upVoteComment = function(comment){
      if(!$scope.isDisabled){
        comment.upvotes += 1;     
        $scope.isDisabled = true;
      }
    }
  }]
);