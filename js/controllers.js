var portfolioApp = angular.module("portfolioApp",[]);
    portfolioApp.controller("GalleryListCtrl",function($scope, $http)
      {
              $http.get("images/galleries.json").then(function(response)
              {
                  $scope.galleries=response.data.galleries;
              }
          );
          $scope.naglowek = "Planety układu słonecznego!";

          $http.get("images/sortowanie.json").then(function(response)
            {
                  $scope.sortList=response.data.sortList;
                  $scope.orderProp = $scope.sortList[0];
                  $scope.orderProp = "distance";
            }
          );
      });
