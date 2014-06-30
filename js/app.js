(function (angular) {

    var app = angular.module("Application", []);

    app.directive('preventScroll', [function () {
	    return {
	        restrict: 'A',
	        link: function (ng, elem, attrs) {
	                
        		debugger;

	            elem.on('DOMMouseScroll mousewheel', function (event) {

	                var $this = $(this),
	                    scrollTop = this.scrollTop,
	                    scrollHeight = this.scrollHeight,
	                    height = $this.outerHeight(),
	                    delta = (event.type == 'DOMMouseScroll' ? event.originalEvent.detail * -40 : event.originalEvent.wheelDelta),
	                    up = delta > 0;

	                if (scrollHeight > height) {
	                    
	                    if (!up && -delta > scrollHeight - height - scrollTop) {
	                        // Down
	                        $this.scrollTop(scrollHeight);
	                        return prevent(event);
	                    }

	                    else if (up && delta > scrollTop) {
	                        // Up
	                        $this.scrollTop(0);
	                        return prevent(event);
	                    }
	                }

	            });


	            // Prevent Default
	            function prevent(event) {
	                event.stopPropagation();
	                event.preventDefault();
	                event.returnValue = false;
	                return false;
	            };
	        }
	    };
	}]);


})(angular);