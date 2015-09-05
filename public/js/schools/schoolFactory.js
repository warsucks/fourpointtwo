app.factory("SchoolFactory", function($http)
{
  return {
    getSchoolById: function(schoolId)
    {
      console.log("schoolfactory get school by id:", schoolId);
      return $http.get('/school/'+schoolId)
      .then(function(response)
      {
        console.log("response.data", response.data);
        return response.data;
      });
    }
  };
});
