angular
.module('bower.module', []);

(function() {
    'use strict';

    angular
        .module('bower.module')
        .service('Service', Service);

    Service.$inject = ['$log'];

    /* @ngInject */
    function Service($log) {
        this.func = func;

        ////////////////

        function func() {
        	return "response from bower";
        }
    }
})();