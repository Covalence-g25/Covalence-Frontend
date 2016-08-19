angular
   .module('Covalence')
   .controller('FilesController', FilesController);

function FilesController($scope, $stateParams, $state, $http) {
   var database = 'http://localhost:3000/';
   $http.get(database + 'api/index/file')
   .then(function (result) {
     for(var i =0; i < result.data.data.length; i++){
      $scope.fileResults = result.data.data;
     }
 })
}
