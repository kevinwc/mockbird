angular.module('DataService', []).factory('DataService', ['$http',
    function($http) {
        return {
            'getBreakfastRestaurants': getBreakfastRestaurants,
            'getLunchRestaurants': getLunchRestaurants,
            'getDinnerRestaurants': getDinnerRestaurants
        };

        function getBreakfastRestaurants(queryData) {
            return ['Mcdonalds', 'Burger King'];
        }

        function getLunchRestaurants(queryData) {
            return ['Wendys', 'Taco Bell', 'Del Taaco', 'Five Guys'];
        }

        function getDinnerRestaurants(queryData) {
            return ['Coastal Flats', 'PF Changs'];
        }
    }
]);