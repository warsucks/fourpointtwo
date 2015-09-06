app.config(function($stateProvider)
{
  $stateProvider.state('school',
  {
    url: '/school/:schoolId',
    resolve: {
      school: function($stateParams, SchoolFactory)
      {
        return SchoolFactory.getSchoolById($stateParams.schoolId);
      }
    },
    templateUrl: 'js/schools/schoolDetails/schoolDetails.html',
    controller: function($scope, school)
    {
      $scope.school = school;
      console.log("in school state, $scope.school=",$scope.school);
      $scope.rating = false;
    }
  });
});
