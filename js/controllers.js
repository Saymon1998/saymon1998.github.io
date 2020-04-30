var portfolioApp = angular.module('portfolioApp',[]);
var i;
    portfolioApp.controller('GalleryListCtrl',function($scope, $http)
      {
              $http.get("../images/galleries.json").then(function(response)
              {
                  $scope.galleries=response.data.galleries;
              }
          );
          $scope.naglowek = 'Planety układu słonecznego!';

          $http.get("../images/sortowanie.json").then(function(response)
            {
                  $scope.sortList=response.data.sortList;
                  $scope.orderProp = $scope.sortList[i];
                  $scope.orderProp = 'distance';
                  i=i+1;
            }
          );

      });
