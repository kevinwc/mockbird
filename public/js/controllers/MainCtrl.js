angular.module('MainCtrl', []).controller('MainController', function($scope, DataService) {
    var testZip = "22182";

    this.getBreakfastList = function() {
        this.list = DataService.getBreakfastRestaurants(testZip);
    };

    this.getLunchList = function() {
        this.list = DataService.getLunchRestaurants(testZip);
    };

    this.getDinnerList = function() {
        this.list = DataService.getDinnerRestaurants(testZip);
    };
});