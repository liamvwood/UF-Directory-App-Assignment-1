angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.isCollapsed = true;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if ($scope.entry !== undefined) {
        console.log("New listing added");
        $scope.listings.push($scope.entry);
        $scope.listings.sort(function(a,b){
          return a.code.localeCompare(b.code);
        });
        $scope.entry = undefined;
      }
    };

    $scope.deleteListing = function(index) {
      console.log(`Debug: delete ${index}`);
      $scope.isCollapsed = true;
      $scope.listings.splice(index,1);
      $scope.detailedInfo = undefined;
    };

    $scope.showDetails = function(index) {
      // console.log(`Debug: showDetails ${index}`);
      if ($scope.isCollapsed === true) {
        console.log("Debug: 1")
        angular.element('#moreInfo').collapse("toggle");
        $scope.isCollapsed = false;
      }
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);