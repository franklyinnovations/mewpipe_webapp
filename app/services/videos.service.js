angular
	.module('mewpipe')
	.factory('videosService', video);

video.$inject = ['$resource','Config'];

function video($resource,Config) {
	return $resource( Config.server.url + ':' + Config.server.port + '/api/videos/:id', { id : '@id'}, {
		update : { method : 'PUT' },
		search  : { method : 'GET', params: {
			s      : "",
			limit  : Config.requests.defaultLimit, 
			offset : 0 
		} },
		findOne : { method : 'GET' },
		findMostShared : { method : 'GET', params: {
			limit: 6,
			ordering : '-weekly_share'
		}},
		findMostPlayed : { method : 'GET', params: {
			limit: 6,
			ordering: '-weekly_view'
		}},
		share : {
			method : 'POST',
			url    : Config.server.url + ':' + Config.server.port + '/api/videos/:id/share'
		}
	} );
}