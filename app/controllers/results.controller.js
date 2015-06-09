angular.module('mewpipe')
       .controller('ResultsController', ResultsController);

ResultsController.$inject = ['$scope','$routeParams', 'videosService', 'Config'];

function ResultsController($scope, $routeParams, videosService, Config){

	var currentPage  = 0;
	var limitResults = Config.requests.defaultLimit;
	var endReached   = false;

	$scope.searchString = $routeParams.string;
	$scope.busy   = true;
	$scope.videos = [];

	$scope.loadMore = loadMore;

	videosService.search(
		{ limit : limitResults, offset: 0, s: $scope.searchString },
		function(response){
			$scope.busy   = false;
			$scope.videos = response.results;
		}
	);


	function loadMore(){

		if(endReached || $scope.busy) return;

		$scope.busy = true;
		currentPage++;

		videosService.search(
			{ limit : limitResults, offset: currentPage*limitResults, s: $scope.searchString },
			function(response){

				if(response.next === null) endReached = true;

				for(var i=0,l=response.results.length;i<l;i++){
					$scope.videos.push(response.results[i]);
				}

				$scope.busy = false;
			}
		);

	}

}