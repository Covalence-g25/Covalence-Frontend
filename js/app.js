angular
   .module('Covalence', ['ui.router'])
   .config(config)

function config($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   controller: 'HomeController',
   templateUrl: 'home.html'
 }).state('home.files', {
   url: 'files',
   controller: 'FilesController',
   templateUrl: 'files.html'
 }).state('home.filedetail', {
   url: 'files/filedetail/:fileID',
   controller: 'FileDetailController',
   templateUrl: 'filedetail.html'
 }).state('home.commit', {
   url: 'file/detail/:fileID/:commitID',
   controller: 'CommitController',
   templateUrl: 'commit.html'
 })
}
