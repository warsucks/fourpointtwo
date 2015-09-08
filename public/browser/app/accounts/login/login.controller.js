app.controller("LoginController", function($scope, Auth)
{
  $scope.user = {};
  $scope.login = Auth.login;
});
