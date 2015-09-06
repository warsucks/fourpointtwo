app.config(function($stateProvider)
{
  $stateProvider.state('school.rate',
  {
    url: '/rating',
    resolve: {
      existentRating: function(RatingFactory, school)
      {
        return RatingFactory.getRatingsBySchoolId(school._id);
      }
    },
    templateUrl: 'app/ratings/ratingForm/ratingForm.html',
    controller: "RatingController"
  });
});
