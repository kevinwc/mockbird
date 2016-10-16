angular.module('MainCtrl', []).controller('MainController', function($scope, DataService) {

    this.getData = function() {
        var testZip = "22182";

        this.list = DataService.getListofRestaurants(testZip);
    };
});