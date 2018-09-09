angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if ($scope.entry !== undefined) {
        $scope.listings.push($scope.entry);
        $scope.listings.sort(function(a,b){
          return a.code.localeCompare(b.code);
        });
        $scope.entry = undefined;
      }
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
      $scope.detailedInfo = undefined;
    };

    $scope.showDetails = function(index) {
      angular.element('#moreInfo').collapse("show");
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);