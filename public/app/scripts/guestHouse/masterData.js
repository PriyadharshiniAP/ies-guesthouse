(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('masterDataCtrl', masterDataCtrl);
    masterDataCtrl.$inject = ['$scope', 'guestHouseMasterService'];
    function masterDataCtrl($scope, guestHouseMasterService) {
       
        $scope.masterData = {};
        $scope.masterData.values = [];
        $scope.dataMode = "ADD";
        function loadInitialMasterData() {
            guestHouseMasterService.getAllMasterData(function (err, res) {
                if (!err) {
                    $scope.mastersData = res;
                   // showUnique()
                }
        
            })
        }
            loadInitialMasterData()
             /*function showUnique() {
                 groupsServices.getDistinctValues("type", {}, function (err, res) {
                     if (!err) {
                         $scope.availbleTypes = res;
                     }

                 })*/
            
        
        $scope.saveMasterData = function () {
           // if ($scope.masterData.key) {
            //    $scope.typeExistError = "";
                $("#basic-modal").modal('hide');
                $scope.masterData.values.forEach(function (item,index) {
                    $scope.masterData.values [index]= item.toUpperCase();
                })
                guestHouseMasterService.createMasterData($scope.masterData, function (err, res) {
                    if (!err) {
                        $scope.mastersData.push(res);
                    }

                })
           // } else {
               // $scope.typeExistError = "Enter key";
           // }
        }
        $scope.setMasterDataForEdit = function (masterData) {
            $scope.masterData = JSON.parse(JSON.stringify(masterData));
            $scope.dataMode = "EDIT";
            $("#basic-modal").modal({ backdrop: 'static', keyboard: false });
        }
        $scope.saveEditedMasterData = function () {
            guestHouseMasterService.updateMasterData($scope.masterData._id, $scope.masterData, function (err, res) {
                $scope.mastersData.forEach(function (masterdata, index) {
                    if (masterdata._id == $scope.masterData._id) {
                        $scope.mastersData[index] = $scope.masterData;
                    }
                })
            })
            $("#basic-modal").modal('hide');
        }
        $scope.removeMasterData = function (index) {
            $scope.masterData.values.splice(index, 1);
        }
        $scope.askDeleteModal = function (index) {
            $("#askDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }
        $scope.deleteMasterDataSure = function () {
            guestHouseMasterService.deleteMasterData($scope.deleteIndex, function (err, res) {
                console.log("success")
            })
            $scope.mastersData.splice($scope.deleteIndex, 1);
            $("#askDeleteModal").modal('hide');
        }

    
} 
       
    
})();


