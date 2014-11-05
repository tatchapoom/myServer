angular.module("myApp", [])
.controller('mainCtrl', function($scope){
	$scope.books = [
		{title: 'CSS', price: 500},
		{title: 'HTML', price: 1300},
		{title: 'JSON', price: 4000}
	];
})
