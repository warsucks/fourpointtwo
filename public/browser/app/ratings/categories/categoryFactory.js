app.factory("CategoryFactory", function()
{
  return {
    categories: ["faculty", "diversity", "socialScene", "studentBody", "localComm", "adminSupport", "finAid"],
    options: [1,2,3,4,5],
    getDisplayStringFromId: function(id)
    {
      var map = {
        faculty: "Faculty",
        diversity: "Diversity",
        socialScene: "Social Scene",
        studentBody: "Student Body",
        localComm: "Surrounding Community",
        adminSupport: "Administrative Support",
        finAid: "Financial Aid"
      };
      return map[id];
    }
  };
});
