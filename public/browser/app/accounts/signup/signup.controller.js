app.controller("SignupController", function($scope, Auth)
{
  $scope.user = {};
  $scope.signup = Auth.signup;
});
