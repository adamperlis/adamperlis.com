'use strict';

var directivesModule = require('./_index.js');

directivesModule.directive('bodyClass',[ '$rootScope', function bodyClass(  $rootScope  ) {
    return function( scope, elem, attr ) {

        $rootScope.$on( "$stateChangeSuccess", function( event, next, current    ) {
            var url = next.name.replace( /\./g, '-' );
            elem.attr( 'class', '' ).addClass( url );
        });
    };
}])
