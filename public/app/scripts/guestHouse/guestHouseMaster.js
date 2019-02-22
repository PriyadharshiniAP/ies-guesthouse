(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('guestHouseMasterCtrl', guestHouseMasterCtrl);
    guestHouseMasterCtrl.$inject = ['$scope', '$state','guestHouseMasterService','$stateParams'];
    function guestHouseMasterCtrl($scope, $state, guestHouseMasterService, $stateParams) {
        $scope.guestHouseId = $stateParams.guestHouse;
        $scope.newGuestHouse = {};
        $scope.guestHouseMasters = [];
        $scope.dataMode = "ADD";
       // $scope.detailsdataMode="ADD";
        function loadInitialAllGuestHouse() {
            guestHouseMasterService.getAllGuestHouse(function (err, res) {
                if (!err) {
                    $scope.guestHouseMasters = res;
                }
            })
        }
        loadInitialAllGuestHouse();
        $scope.updateGuestHouse = function () {
            delete $scope.newGuestHouse.$$hashKey
            guestHouseMasterService.updateGuestHouse($scope.newGuestHouse._id, $scope.newGuestHouse, function (err, res) {
                if (!err) {
                    var index = $scope.guestHouseMasters.findIndex(function (data) {
                        return data._id == $scope.newGuestHouse._id;
                    });
                    $scope.guestHouseMasters[index] = $scope.newGuestHouse;
                   
                }
            });
        }
        $scope.editGuestHouse = function (guestHouse){
            $scope.detailsdataMode="EDIT";
            $state.go('addGuesthouse',{guestHouse:guestHouse});
            $scope.guestHouse = JSON.parse(JSON.stringify(guestHouse));
        }
    }
    })();  
       /* $scope.saveGuestHouse = function () {
            $("#guestHouseModal").modal('hide');
            guestHouseMasterService.createGuestHouse($scope.newGuestHouse, function (err, res) {
                if (!err) {
                    $scope.guestHouseMasters.push($scope.newGuestHouse);
                    $('#guestHouseModal').modal("hide");
                }
            })
        }
        $scope.setEnvironmentForEdit = function (guestHouse) {
            $scope.dataMode = "EDIT";
            $('#guestHouseModal').modal("show");
            $scope.newGuestHouse = JSON.parse(JSON.stringify(guestHouse));

        }
        $scope.updateGuestHouse = function () {
            delete $scope.newGuestHouse.$$hashKey
            guestHouseMasterService.updateGuestHouse($scope.newGuestHouse._id, $scope.newGuestHouse, function (err, res) {
                if (!err) {
                    var index = $scope.guestHouseMasters.findIndex(function (data) {
                        return data._id == $scope.newGuestHouse._id;
                    });
                    $scope.guestHouseMasters[index] = $scope.newGuestHouse;
                    //  $('#GuestHouseModal').modal('hide');
                }
            });
        }
        $scope.removeGuestHouse = function (index) {
            $scope.newGuestHouse.splice(index, 1);
        }

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        
        }
        $scope.deleteGuestHouseSure = function () {
            guestHouseMasterService.deleteGuestHouse($scope.deleteIndex, function (err, res) {
            })
           
            $scope.guestHouseMasters.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');
       
            }
        }*/    

             
       /* $scope.deleteGuestHouse = function () {
           // $scope.newGuestHouse = JSON.parse(JSON.stringify(newGuestHouse));
            //delete $scope.newGuestHouse.$$hashKey
            guestHouseMasterService.deleteGuestHouse($scope.newGuestHouse._id, $scope.newGuestHouse, function (err, res) {
            if (!err) {
                
                var index = $scope.guestHouseMasters.findIndex(function (data){
                     return data._id == newGuestHouse._id;
            });
            $scope.guestHouseMasters[index] = $scope.newGuestHouse;
            $scope.guestHouseMasters.splice(index, 1);
                
            }
        })
        }
         guestHouseMasterService.deleteGuestHouse($scope.deleteIndex, function (err, res) {
                if (!err) {
                
                    var index = $scope.guestHouseMasters.findIndex(function (){
                         return data._id == newGuestHouse._id;
                });
            }            
            $scope.guestHouseMasters.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');
        })
        */

    
        

    

