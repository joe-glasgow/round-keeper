// Import functions
var orderNotification = require('../utilities/notifications');
// Start the Controller
// TODO: Add persistent state via localstorage
var RoundsController = /* @ngInject */ function ($scope, pubsModel, drinksModel) {
    // Set Pubs
    $scope.pubs = pubsModel;
    // Set Drinks
    $scope.drinks = drinksModel;
    // Current Round
    $scope.currentRound = 1;
    // Round Amount
    $scope.currentRoundAmount = 0;
    // total quantity of orders
    $scope.totalNumberOfOrders = 0;
    // current order
    $scope.currentOrder = {};
    // set Pub Context
    $scope.selectedPub = $scope.pubs[0];
    // Total Number of Drinks Ordered - init
    $scope.totalDrinksOrdered = 0;
    // Total Cost of Current Tab - init
    $scope.totalCostOfTab = 0;
    // Total Cost of Round
    $scope.totalCostOfRound = 0;
    // Order not in progress
    $scope.orderNotInProgress = true;
    // Order select pub
    $scope.selectPub = false;
    // Drinks select
    $scope.selectDrinks = false;
    // Calculate Number of Drinks Ordered
    $scope.addDrinksToTotal = function (quantity) {
        if (parseInt(quantity)) {
            this.totalDrinksOrdered += quantity;
        }
    };
    // Calculate Total of Drinks Ordered
    $scope.addSumToTotal = function (sum) {
        $scope.totalCostOfTab += sum;
    };
    // Add a new round
    $scope.addRound = function () {
        if (!$scope.selectPub) {
            $scope.selectPub = true;
            $scope.orderNotInProgress = false
        }
        return
    };
    // pub change
    $scope.changePub = function (selected) {
        $scope.selectedPub = selected;
        $scope.selectPub = true;
        // Assign the pub to the current order and initialise for drinks
        return false;
    };
    // You have chosen wisely
    $scope.pubChosen = function () {
        $scope.selectPub = false;
        $scope.selectDrinks = true;
        // assign once pub chosen
        $scope.currentOrder[$scope.selectedPub.friendlyName] = { drinks: [], amounts: [] };
        return false;
    }
    // Update prices
    $scope.updatePrice = function (cost, amount, index) {
        // Keeping track of totals
        // saves logic on button presses [HTML 5 took care of numerical validation]
        if (amount !== '') {
            // Assign current row cost
            $scope.currentOrder[$scope.selectedPub.friendlyName].drinks[index] = (cost * amount);
            // Assign the amounts
            $scope.currentOrder[$scope.selectedPub.friendlyName].amounts[index] = amount;
            // set the total cost of tab
            // TODO: Consider combining into reusable function
            $scope.totalCostOfRound = $scope.currentOrder[$scope.selectedPub.friendlyName].drinks.reduce(function (a, b) {
                // Calculate total
                var total = a + b;
                // Round to 2 decimal places
                var rounded = parseFloat(total.toFixed(2));
                // return the value
                return rounded;
            });
            // Set the amounts
            // TODO: Consider combining into reusable function
            $scope.currentRoundAmount = $scope.currentOrder[$scope.selectedPub.friendlyName].amounts.reduce(function (a, b) {
                // Calculate total
                var total = a + b;

                // return the value
                return total;
            });
        }

        return false;
    };
    // reset current order
    $scope._reset = function () {
        // reset the views
        $scope.selectPub = false;
        $scope.selectedPub = {};
        $scope.selectDrinks = false;
        // reset the round
        $scope.totalCostOfRound = 0;
        // reset order
        $scope.orderNotInProgress = true;
    }
    // Confirm order
    $scope.confirmOrder = function () {
        // Check if we can progress with the order
        if (!$scope.orderNotInProgress && orderNotification($scope.totalCostOfRound)) {
            // handle success
            // increase rounds
            $scope.currentRound += 1;
            // increase total orders number
            $scope.totalNumberOfOrders += $scope.currentRoundAmount;
            // increase total
            $scope.addSumToTotal($scope.totalCostOfRound);
            // reset
            $scope._reset();
            return true
        }
        // Break out
        return false
    }
    // Cancel Order
    $scope.cancelOrder = function () {
        if (window.confirm('Do you really wish to cancel this order?')) {
            // Cancel it down
            $scope._reset();
        } else {
            return false;
        }
    }
};
// Export the module
module.exports = RoundsController;