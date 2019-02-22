var App = angular.module('app');
App.controller('guestHouseStayCtrl',guestHouseStayCtrl);
guestHouseStayCtrl.$inject = ['$scope', '$window', '$timeout','guestHouseMasterService'];
    function guestHouseStayCtrl($scope, $window, $timeout, guestHouseMasterService) {
        //Datepicker
        $scope.dateOpts1 = {
            dateFormat: 'd-m-Y',
        };   
        $scope.rooms =  [] ;
        function loadInitialRooms() {
            guestHouseMasterService.getAllRooms(function (err, res) {
                if (!err) {
                    $scope.rooms = res;
                }
            })
        }
        loadInitialRooms();
    };