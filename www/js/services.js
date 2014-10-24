angular.module('starter.services', [])

    .factory('activities', function($http) {
        return {
            search: function () {
                var token = 'd23bd31f3d85df79c29a39c031c1012f476b68e83b80a8c99121eb6261ca7475';
                var url = 'https://api.paris.fr/api/data/1.4/QueFaire/get_activities/?token='
                        + token
                        + '&cid=20&tag=3&created=0&start=0&end=0&offset=0&limit=10';
                var apiResult = $http.get(url);
                return apiResult;
            }
        };
    })