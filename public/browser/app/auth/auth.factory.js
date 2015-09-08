app.factory("Auth", function($http)
{
  var Auth = {};
  Auth.userId;

  console.log("running the auth factory")
  $http.get('/api/users/me').then(function(response){
    Auth.userId = response.data._id;
  })

  Auth.signup = function(user)
  {
    console.log("Auth signup run");
    return $http.post('/api/users', user)
    .then(function(response)
    {
      Auth.userId = response.data._id;
      console.log("user id", Auth.userId);
      return response.data;
    });
  }

  Auth.login = function(user)
  {
    var loggedInUser;
    // $http.get('/api/users')
    // .then(function(response)
    // {
    //   allUsers = response.data;
    // });

    console.log("Auth login run for email", user.email);
    return $http.post('/api/users/login', {email: user.email})
    .then(function(response)
    {
      loggedInUser = response.data;
      Auth.userId = loggedInUser._id;
      console.log("logged in", loggedInUser);
      return loggedInUser;
    });
  }

  Auth.logout = function()
  {
    return $http.post('/api/users/logout')
    .then(function(response)
    {
      Auth.userId = undefined;
      return response.data;
    })
  }

  return Auth;
});
