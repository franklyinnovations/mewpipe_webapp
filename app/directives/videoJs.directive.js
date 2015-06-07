angular.module('mewpipe')
	   .directive('videoJs', videoJs);

function videoJs(){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var RATIO = 16/9;

	var videoOptions = {
		controls : true,
		preload  : 'auto',
	};

	/**
	 * DIRECTIVE
	 */
	
	var directive = {
		templateUrl : '/app/directives/videoJs.directive.html',
		restrict    : 'EA',
		link        : link,
		scope       : {
			shareAction  : '=',
			video : '='
		}
	}

	return directive;

	/**
	 * FUNCTIONS
	 */

	function link(scope, element, attrs){

		var videoContainer = document.getElementById('video_container');
		var videoElement = element.context.getElementsByTagName('video')[0];

		var player = videojs(videoElement, videoOptions);

		//
		scope.video.$promise.then(function(v){
			player.src(v.file_urls);
			player.poster(v.thumbnail_url);
			_setVideoSizes(player,videoContainer);
		})

		var shareButton = player.controlBar.addChild('button', {});
		shareButton.addClass("vjs-share"); 
		shareButton.on('click',function(){
			player.pause();
			scope.shareAction();
		});

		_setVideoSizes(player,videoContainer);

		addResizeListener(videoContainer,function(){ _setVideoSizes(player,videoContainer); })

		element.bind("$destroy", function(){ player.dispose(); });
	}

	function _setVideoSizes(video,container){

		var containerWidth  = container.offsetWidth;
		var percentage      = window.innerWidth < 1200 ? 1 : 0.6;

		var sizes = {
			width  : containerWidth*percentage,
			height : (containerWidth*percentage)/RATIO
		}

		video.width(sizes.width);
		video.height(sizes.height);
	}

}