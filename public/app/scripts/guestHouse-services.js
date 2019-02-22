(function(){
    'use strict';
    var App = angular.module('app');

App.service('guestHouseMasterService', guestHouseMasterService);
    guestHouseMasterService.$inject = ["$http", "$rootScope"];
    function guestHouseMasterService($http, $rootScope) {
        
        this.getAllGuestHouse = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/getAllGuestHouse'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getSelectedRoomTypes = function (id,callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/getSelectedRoomTypes/'+id
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        
        this.createGuestHouse = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/createGuestHouse'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateGuestHouse = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/updateGuestHouse'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteGuestHouse = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/deleteGuestHouse'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.removeDirtyAttachment = function (id, callback) {
            var request = {
                url: "guestHouse/removeDirtyAttachment",
                method: 'DELETE',
                data: { "dirtyFileId": id },
                headers: { 'Content-type': 'application/json'}

            };
            $http(request).then(function (response) {
                callback(null, response.data);
            }, function (error) {
                callback(error, null);
            });
        }

        /////////////////////////// MASTER DATA///////////////////////
        this.getAllMasterData = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'masterData/getAllMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
       
        this.createMasterData = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'masterData/createMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateMasterData = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'masterData/updateMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteMasterData = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'masterData/deleteMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
    
         //Room Type
         this.createRoomType = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/createRoomType'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllRoomTypes = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/getAllRoomTypes'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateRoomType = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/updateRoomType'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteRoomType = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/deleteRoomType'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.removeRoomTypeAttachment = function (id, callback) {
            var request = {
                url: "guestHouse/removeRoomTypeAttachment",
                method: 'DELETE',
                data: { "dirtyFileId": id },
                headers: { 'Content-type': 'application/json'}

            };
            $http(request).then(function (response) {
                callback(null, response.data);
            }, function (error) {
                callback(error, null);
            });
        }


        //////////////////FLOORS AND ROOMS/////////////////////////
        this.createFloorsandRooms = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: {recordToInsert : recordToInsert},
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/createFloorsandRooms'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        
        ////////////////////////////ROOM REQUEST//////////////////////
        this.addRoomRequest = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/addRoomRequest'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllRoomRequest = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/getAllRoomRequest'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        ////////////////////////////////Room View//////////////
        this.getAllRooms = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/getAllRooms'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.checkAvailabilityforRooms = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/checkAvailabilityforRooms'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getGuestHouseDetails=function(guestHouseId, callback){
            var responsePromise = $http({
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
                url: 'guestHouse/getDetail/' + guestHouseId
            });
             responsePromise.then(function (responseData){
                callback(null, responseData.data);
            }, function(error){
                callback(error, null);
            });
        }
    
    this.getGuestHouseById = function (id, callback) {
        var responsePromise = $http({
            method: 'GET',
           // data: JSON.stringify({ id: id}),
            headers: { 'Content-Type': 'application/json' },
            url: 'guestHouse/getById/' + id
        });
        responsePromise.then(function (responseData) {
            callback(null, responseData.data);
        }, function (error) {
            callback(error, null);
        });
    };
    
    this.saveEditedGuestHouse = function (id, recordToEdit, callback) {
        var responsePromise = $http({
            method: 'PUT',
            data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
            headers: { 'Content-Type': 'application/json' },
            url: 'guestHouse/saveEditedGuestHouse'
        });
        responsePromise.then(function (responseData) {
            callback(null, responseData.data);
        }, function (error) {
            callback(error, null);
        });
    }
    this.saveEditedfloorsandRooms = function (id, recordToEdit, callback) {
        var responsePromise = $http({
            method: 'PUT',
            data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
            headers: { 'Content-Type': 'application/json' },
            url: 'guestHouse/saveEditedFloorsandRooms'
        });
        responsePromise.then(function (responseData) {
            callback(null, responseData.data);
        }, function (error) {
            callback(error, null);
        });
    }
    this.getFloorsandRoomsById = function (id, callback) {
        var responsePromise = $http({
            method: 'GET',
           // data: JSON.stringify({ id: id}),
            headers: { 'Content-Type': 'application/json' },
            url: 'guestHouse/getFloorById/' + id
        });
        responsePromise.then(function (responseData) {
            callback(null, responseData.data);
        }, function (error) {
            callback(error, null);
        });
    };
    this.updateGuestHouseFloorsandRooms = function (id, recordToEdit, callback) {
        var responsePromise = $http({
            method: 'PUT',
            data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
            headers: { 'Content-Type': 'application/json' },
            url: 'guestHouse/updateGuestHouseFloorsandRooms'
        });
        responsePromise.then(function (responseData) {
            callback(null, responseData.data);
        }, function (error) {
            callback(error, null);
        });
    }
    this.getAllFloorsandRooms = function (callback) {
        var responsePromise = $http({
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            url: 'guestHouse/getAllFloorsandRooms'
        });
        responsePromise.then(function (responseData) {
            callback(null, responseData.data);
        }, function (error) {
            callback(error, null);
        });
    }
}

    // this.editGuestHouseDetails=function(guestHouseId, details, callback){
    //     var responsePromise = $http({
    //         method: 'put',
    //         data: JSON.stringify(details),
    //         headers: { 'Content-Type': 'application/json' },
    //         url: 'guestHouse/' + guestHouseId
    //     });
    //      responsePromise.then(function (response){
             
    //         callback(null, response);
    //     }, function(error){
    //         callback(error, null);
    //     });
    // }


})();