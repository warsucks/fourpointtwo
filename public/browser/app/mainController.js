app.controller("MainController", function($scope, $state, SchoolFactory)
{
  SchoolFactory.getAllSchools()
  .then(function(schools)
  {
    $scope.allSchools = schools;
  });

  $scope.setCurrentSchoolById = function(schoolId)
  {
      SchoolFactory.getSchoolById(schoolId)
      .then(function(school)
      {
        $scope.currentSchool = school;
        $state.go('school',{schoolId: $scope.currentSchool._id});
      })
  };
});
