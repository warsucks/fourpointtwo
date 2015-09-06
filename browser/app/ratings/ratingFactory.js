app.factory('RatingFactory', function($http)
{
  //make ajax request for new rating

  return {
    getRatingsBySchoolId: function(schoolId)
    {
      return $http.get('/rating/'+schoolId)
      .then(function(response)
      {
        return response.data;
      });
    },
    addRating: function(userId, schoolId, ratings)
    {
      return $http.post('/rating', {userId: userId, schoolId: schoolId, ratings: ratings})
      .then(function(response)
      {
        return response.data;
      });
    }
  }
});
