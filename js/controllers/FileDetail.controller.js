angular
   .module('Covalence')
   .controller('FileDetailController', FileDetailController);

function FileDetailController($scope, $stateParams, $state, $http) {
  var fileName = $stateParams.fileName;
  console.log(fileName);
  var database = 'http://localhost:3000/';
   $http.get(database +  'api/index/files/filedetail' + '/' + fileName)
   .then(function (result) {
     $scope.fileName = result.data.data.fileName;
     console.log(result.data.data.fileName);
 })
}
