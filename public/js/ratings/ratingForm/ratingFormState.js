app.config(function($stateProvider)
{
  $stateProvider.state('school.rate',
  {
    url: '/rating',
    resolve: {
      existentRating: function(RatingFactory, school)
      {
        return RatingFactory.getRatingsBySchoolId(school._id);
      }
    },
    templateUrl: 'app/ratings/ratingForm/ratingForm.html',
    controller: function($scope,existentRating)
    {
      //$scope.school = school;
      $scope.rating = false;
      if(Object.keys(existentRating).length)
      {
        console.log("rating exists", existentRating)
        $scope.alreadyRated = true;
      }
      else
      {
        $scope.alreadyRated = false;
      }
    }
  });
});
