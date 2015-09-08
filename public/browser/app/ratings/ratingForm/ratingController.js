app.controller("RatingController", function($scope, existentRating, CategoryFactory, RatingFactory)
{
  $scope.ratings = {};
  $scope.addRating = RatingFactory.addRating;
  $scope.categories = CategoryFactory.categories;
  $scope.options = CategoryFactory.options;
  $scope.getCategoryDisplayStr = CategoryFactory.getDisplayStringFromId;
  if(Object.keys(existentRating).length)
  {
    $scope.userAlreadyRated = true;
  }
  else
  {
    $scope.userAlreadyRated = false;
  }
});
