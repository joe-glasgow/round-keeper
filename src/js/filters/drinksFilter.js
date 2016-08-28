var drinksFilter = function () {
    // Filter the array
    return function (drinks, packageId) {
        var filtered = drinks.filter(function(drink) {
            // Filtered array will have only the categories identified
            if (drink.drinksPackages.indexOf(packageId) > -1) {
                return drink
            }
        });
        // return the filtered array
        return filtered;
    };
};
// export the moduel
module.exports = drinksFilter;