angular.module('DataService', []).factory('DataService', ['$http',
    function($http) {
        return {
            'getListofRestaurants': getListofRestaurants
        };

        function getListofRestaurants(queryData) {
            return ['Mcdonalds', 'Burger King', 'Wendys', 'Taco Bell', 'Coastal Flats', 'Panda Express', 'PF Changs', 'Del Taaco', 'Five Guys'];
        }
    }
]);