app.config(function($stateProvider)
{
  $stateProvider.state('school',
  {
    url: '/school/:schoolId',
    resolve: {
      school: function($stateParams, SchoolFactory)
      {
        return SchoolFactory.getSchoolById($stateParams.schoolId);
      },
      ratings: function($stateParams, RatingFactory)
      {
        return RatingFactory.getRatingsBySchoolId($stateParams.schoolId);
      }
    },
    templateUrl: 'app/schools/schoolDetails/schoolDetails.html',
    controller: function($scope, school, ratings, CategoryFactory)
    {
      $scope.school = school;
      $scope.school.existentRatings = ratings;
      $scope.school.avgRatings = {};

      $scope.categories = CategoryFactory.categories;
      $scope.getCategoryDisplayStr = CategoryFactory.getDisplayStringFromId;
      // $scope.school.avgRatings.faculty = $scope.ratings.reduce(function(previousValue, currentValue){
      //   return previousValue + currentValue.values.faculty;
      // }, 0);
      $scope.categories.forEach(function(category)
      {
        averageRatings(category);
      });

      function averageRatings(category)
      {
        var numRatings = 0;
        $scope.school.existentRatings.forEach(function(ratingSet)
        {
          if(ratingSet.values.hasOwnProperty(category))
          {
            numRatings++;
          }
        })
        $scope.school.avgRatings[category] = $scope.school.existentRatings.reduce(function(previousValue, currentValue)
        {
          if(currentValue.values[category])
          {
            return previousValue + currentValue.values[category];
          }
          else
          {
            return previousValue;
          }
        },0)/numRatings;
      }
    }
  });
});
