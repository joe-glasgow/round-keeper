/* require angular js */
var angular = require('angular');

/* models */
var pubsModel = require('./models/pubs.model');
var drinksModel = require('./models/drinks.models');

/* controllers */
var RoundAppController = require('./controllers/roundsController');

/* directives */
var orderStart = require('./directives/orderStart');

/* custom filters */
var drinksPackages = require('./filters/drinksFilter');

/* Main App and Services*/
// TODO: Move services out of hardcoded models and use $http and JSON
var angularApp = angular.module('roundKeeper', [])
    .service('pubsModel', pubsModel)
    .service('drinksModel', drinksModel);
    // apply filter
    angularApp.filter('drinksPackages', drinksPackages)
        // Add Controller
        .controller('RoundAppController', RoundAppController)
        // Add Directice
        .directive('orderStart', orderStart);

