app.controller('NewRatingController', function ($scope, RatingFactory) {
  console.log("in new rating controller, school =",$scope.school);
  $scope.addRating = RatingFactory.addRating;
});
