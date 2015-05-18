angular.module('mewpipe')
	   .config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl  : '/app/views/home.html',
			controller   : 'HomeController',
			controllerAs : 'home'
		})

		.when('/search/:string', {
			templateUrl  : '/app/views/search.html',
			controller   : 'SearchController',
			controllerAs : 'search'
		});
}