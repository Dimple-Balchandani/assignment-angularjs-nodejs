var app = angular.module('myapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/dashboard');

	$stateProvider.state('dashboard', {
		url : '/dashboard',
		templateUrl: 'dashboard.html'
	}).state('layout', {
		url: '/layout',
		templateUrl:'layout.html'
	});
});

app.controller('appctrl',['$scope','$http', function($scope, $http) {
	$scope.showSuggestion = '';

	$scope.refresh=function(){
		$http.get('/demoApp').success(function(response){
		$scope.showSuggestion = response;
		});
		return $scope.showSuggestion.length;
	};

	$scope.refresh();

	$scope.SubmitSuggestion=function(suggestion){
		var obj = {'suggestion': suggestion}
		$http.post('/demoApp',obj).success(function(response){
			console.log(response)
			$scope.refresh();
		});
	};

	$scope.showCount = function() {
		var count = $scope.refresh();
		alert ("no of records: "+ count)
	}
}]);