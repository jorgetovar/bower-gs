(function() {
	'use strict';

	angular
	.module('test');
})();

(function() {
    'use strict';

    angular
        .module('test')
        .service('Service', Service);

    Service.$inject = ['$log'];

    /* @ngInject */
    function Service($log) {
        this.func = func;

        ////////////////

        function func() {
        	console.log("bower gs-share components!");
        }
    }
})();