app.controller("MainController", function($scope, SchoolFactory)
{
  $scope.setCurrentSchoolById = function(schoolId)
  {
      SchoolFactory.getSchoolById(schoolId)
      .then(function(school)
      {
        $scope.currentSchool = school;
      })
  };
});
