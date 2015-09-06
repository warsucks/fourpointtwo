app.factory("SchoolFactory", function($http)
{
  return {
    getAllSchools: function()
    {
      return $http.get('/schools')
      .then(function(response)
      {
        return response.data;
      });
    },
    getSchoolById: function(schoolId)
    {
      return $http.get('/schools/'+schoolId)
      .then(function(response)
      {
        console.log("response.data", response.data);
        return response.data;
      });
    }
  };
});
