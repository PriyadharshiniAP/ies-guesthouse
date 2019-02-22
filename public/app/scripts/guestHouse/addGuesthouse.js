(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('addGuesthouseCtrl', addGuesthouseCtrl);
    addGuesthouseCtrl.$inject = ['$scope', '$rootScope', 'guestHouseMasterService', '$stateParams', '$timeout'];
    function addGuesthouseCtrl($scope, $rootScope, guestHouseMasterService, $stateParams, $timeout) {
        $scope.guestHouseId = $stateParams.guestHouse;
        $scope.newGuestHouse = {};
        $scope.guestHouse = [];
        $scope.guestHouseMasters = [];
        $scope.newfloor = {};
        $scope.detailsdataMode = $stateParams.detailsdataMode;
        // edit mode
        if ($scope.detailsdataMode == 'Edit') {
            // $scope.n = "5c6527466648f8569cede9ba";
            //get all floors and rooms details for edit 
            $scope.getFloorsandRoomDetails = function () {
                guestHouseMasterService.getFloorsandRoomsById($scope.n, function (err, res) {
                    if (!err) {
                        $scope.new = res;
                        //var i=0;
                        //console.log($scope.new.roomNumber.length);
                    }
                });
            }
            $scope.getFloorsandRoomDetails();
            //get all guest house details by guesthouseID for edit
            $scope.getGuestHouseDetails = function () {
                guestHouseMasterService.getGuestHouseById($scope.guestHouseId, function (err, res) {
                    if (!err) {
                        $scope.newGuestHouse = res;
                    }
                });
            }
            $scope.getGuestHouseDetails();
            $scope.loadInitialRoomType = function (id) {
                guestHouseMasterService.getSelectedRoomTypes(id, function (err, res) {
                    if (!err) {
                        $scope.roomType = res;
                        $('#dropouts-table').DataTable().clear();
                        $('#dropouts-table').DataTable().destroy();
                        $timeout(function () {
                            $('#dropouts-table').DataTable({
                                "aoColumnDefs": [{ "bSortable": false, "aTargets": [0] }]
                            });
                        }, 50);
                    }
                })
            }
        }
        //save basic information of guest house
        $scope.enableEditRoomDetails = false;
        $scope.saveGuestHouse = function () {
            guestHouseMasterService.createGuestHouse($scope.newGuestHouse, function (err, res) {
                if (!err) {
                    $scope.guestHouse = res;
                    $scope.enableEditRoomDetails = true;
                }
            })
        }
        //update basic information of guest house
        $scope.updateGuestHouseBasicInfo = function () {
            delete $scope.newGuestHouse.$$hashKey
            guestHouseMasterService.saveEditedGuestHouse($scope.newGuestHouse._id, $scope.newGuestHouse, function (err, res) {
                if (!err) {
                    var index = $scope.guestHouseMasters.findIndex(function (data) {
                        return data._id == $scope.newGuestHouse._id;
                    });
                    $scope.guestHouseMasters[index] = $scope.newGuestHouse;
                }
            });
        }
        //$scope.newRoomType = {};
        $scope.roomType = [];
        $scope.facility = ['AC', 'TV', 'Free Wifi', 'Kitchen', 'In-house Restaurant', 'Parking Facility', 'Card Payment', 'Power backup', 'Conference Room', 'Banquet Hall', 'CCTV Cameras', 'Dining Area', 'Elevator', 'Swimming Pool', 'Hot Water', 'Bar', 'Wheelchair Accessible', 'Room Heater', 'In Room Safe', 'Mini Fridge', 'Complimentary Breakfast', 'Gym', 'Hair Dryer', 'Laundry', 'Pet Friendly', 'HDTV', 'Spa', 'Wellness Center', 'Electricity', 'Bath Tub', 'Netflix', 'Kindle', 'Coffee Tea Maker', 'Sofa Set', 'Jacuzzi', 'Full Length Mirrror', 'Balcony', 'King Bed', 'Queen Bed', 'Single Bed', 'Intercom', 'Sufficient Room Size', 'Sufficient Washroom'];
        $scope.dataMode = "ADD";
        $scope.imageAttachment = {
            dzOptions: {
                url: "guestHouse/file/upload",
                method: "put",
                parallelUploads: 1,
                addRemoveLinks: true,
                acceptedFiles: 'image/jpeg, images/jpg, image/png',
                dictDefaultMessage: 'Click to add or drop photos',
                autoProcessQueue: true,
                createImageThumbnails: true,
                previewContainer: true,
                dictResponseError: 'Could not upload this file',
                paramName: function () {
                    return "fileAttachment";
                },
                renameFile: function (file) {
                    file.upload.filename = file.name;
                },
            },
            dzCallbacks: {
                init: function () {
                    this.on("addedfile", function (file) {
                    });
                },
                "sending": function (file, xhr, formData) {
                },
                "addedfile": function (file) {
                    console.info('File added from dropzone .', file);
                    $scope.displayFile = file.name;
                },
                "removedfile": function (file) {
                    console.info('File removed from Server .', file);
                    $scope.removeFile(file.id);
                    $scope.removeFile(file);
                },
                "success": function (file, xhr) {
                    console.info(file);
                    file.id = xhr[0].id;
                    file.xhr = xhr;
                    if (!$scope.newGuestHouse) {
                        $scope.newGuestHouse = {};
                    }
                    $scope.newGuestHouse.fileAttachmentDetails = {
                        "id": file.id,
                        "contentType": file.type,
                        "originalName": file.name,
                        "imageUrl": "guestHouse/loadimg/" + file.id + "/" + file.name + "/" + file.type
                    };
                    //console.info("details",$scope.imageInput.fileAttachmentDetails);
                },
                "error": function (file) {
                },
                "complete": function (file) {
                }
            },
            dzMethods: {

            }
        };
        $scope.removeFile = function (id) {
            $scope.removeDirtyAttachment(id)
            $scope.newGuestHouse = {};
            $scope.newGuestHouse.fileAttachmentDetails = {};
        }
        $scope.removeDirtyAttachment = function (id) {
            $scope.dirtyFileRemoved = undefined;
            guestHouseMasterService.removeDirtyAttachment(id, function (err, res) {
                if (!err) {
                    $scope.dirtyFileRemoved = true;
                    return;
                }
                else {
                    $scope.dirtyFileRemoved = false;
                    return;
                }
            })
        }
        //Room Type
        $scope.dateOpts1 = {
            dateFormat: 'd-m-Y',
        };
        $scope.roomTypeImage = {
            dzOptions: {
                url: "guestHouse/file/uploadRoomType",
                method: "put",
                parallelUploads: 1,
                addRemoveLinks: true,
                acceptedFiles: 'image/jpeg, images/jpg, image/png',
                dictDefaultMessage: 'Click to add or drop photos',
                autoProcessQueue: true,
                createImageThumbnails: true,
                previewContainer: true,
                dictResponseError: 'Could not upload this file',
                paramName: function () {
                    return "roomTypeAttachment";
                },
                renameFile: function (file) {
                    file.upload.filename = file.name;

                },

            },

            dzCallbacks: {
                init: function () {
                    this.on("addedfile", function (file) {
                    });
                },
                "sending": function (file, xhr, formData) {
                },
                "addedfile": function (file) {
                    console.info('File added from dropzone .', file);
                    $scope.displayFile = file.name;
                },
                "removedfile": function (file) {
                    console.info('File removed from Server .', file);
                    $scope.removeRoomTypeFile(file.id);
                    $scope.removeRoomTypeFile(file);
                },
                "success": function (file, xhr) {
                    file.id = xhr[0].id;
                    file.xhr = xhr;
                    if (!$scope.newGuestHouse) {
                        $scope.newGuestHouse = {};
                    }

                    $scope.newGuestHouse.roomTypeAttachmentDetails = {
                        "id": file.id,
                        "contentType": file.type,
                        "originalName": file.name,
                        "imageUrl": "guestHouse/loadimg/" + file.id + "/" + file.name + "/" + file.type
                    };
                },
                "error": function (file) {

                },
                "complete": function (file) {
                }
            },
            dzMethods: {

            }
        };
        $scope.removeRoomTypeFile = function (id) {
            $scope.removeRoomTypeAttachment(id)
            $scope.newGuestHouse = {};
            $scope.newGuestHouse.fileAttachmentDetails = {};
        }
        $scope.removeRoomTypeAttachment = function (id) {
            $scope.dirtyFileRemoved = undefined;
            guestHouseMasterService.removeRoomTypeAttachment(id, function (err, res) {
                if (!err) {
                    $scope.dirtyFileRemoved = true;
                    return;
                }
                else {
                    $scope.dirtyFileRemoved = false;
                    return;
                }
            })
        }
        $scope.dateOptsfrom = {
            dateFormat: 'd/m/Y',
            minDate: "today",
            disable: ["18/01/2019", "22/01/2019", "30/01/2019"]
        }
        $scope.dateOptsto = {
            dateFormat: 'd/m/Y',
            minDate: "today",
            disable: ["18/01/2019", "22/01/2019", "30/01/2019"]
        }
        $scope.city = ['Coimbatore', 'Karur', 'Tiruppur', 'Madurai', 'Salem'];
        $scope.state = ['Tamil Nadu', 'Andhra Pradesh', 'Bihar', 'Haryana', 'Manipur'];
        $scope.loadInitialRoomType = function (id) {
            guestHouseMasterService.getSelectedRoomTypes(id, function (err, res) {
                if (!err) {
                    $scope.roomType = res;
                    $('#dropouts-table').DataTable().clear();
                    $('#dropouts-table').DataTable().destroy();
                    $timeout(function () {
                        $('#dropouts-table').DataTable({
                            "aoColumnDefs": [{ "bSortable": false, "aTargets": [0] }]
                        });
                    }, 50);
                }
            })
        }
        $scope.saveRoomType = function (guesthouse) {
            console.log(guesthouse)

            $scope.dataMode = "ADD";
            $scope.newGuestHouse['guestHouseId'] = guesthouse;
           // $scope.newGuestHouse= guesthouse;
            //$scope.newGuestHouse = {};
            $('#addRoomType').modal("hide");
            guestHouseMasterService.createRoomType($scope.newGuestHouse, function (err, res) {
                if (!err) {
                    $scope.roomType = res;
                }
            })
        }
        $scope.setEnvironmentForAdd = function () {
            $scope.newGuestHouse = {};           
            $scope.dataMode = "ADD";
            $("#addRoomType").modal({ backdrop: 'static', keyboard: false });
        }
        $scope.editRoomType = function (rooms) {
            $scope.dataMode = "EDIT";
            $('#addRoomType').modal("show");
            $scope.newGuestHouse = JSON.parse(JSON.stringify(rooms));
        }
        $scope.updateRoomType = function () {
            delete $scope.newGuestHouse.$$hashKey
            guestHouseMasterService.updateRoomType($scope.newGuestHouse._id, $scope.newGuestHouse, function (err, res) {
                if (!err) {
                    var index = $scope.roomType.findIndex(function (data) {
                        return data._id == $scope.newGuestHouse._id;
                    });
                    $scope.roomType[index] = $scope.newGuestHouse;
                    $('#addRoomType').modal('hide');
                }
            });
        }
        $scope.removeRoomType = function (index) {
            $scope.newGuestHouse.splice(index, 1);
        }
        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;

        }
        $scope.deleteRoomTypeSure = function () {
            guestHouseMasterService.deleteRoomType($scope.deleteIndex, function (err, res) {
            })
            $scope.roomType.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');
        }
        ///////////FLOORS AND ROOMS//////////////
        var i = 0;
        $scope.newfloor.startingNumber = [];
        $scope.newfloor.numberDigit = [];
        $scope.newfloor.roomNumber = [];
        $scope.roomCounts = [];
        $scope.roomCount = function (index, count) {
            $scope.roomCounts[index] = [];
            $scope.newfloor.roomNumber[index] = {};
            $scope.newfloor.roomNumber[index].room = [];
            for (i = 0; i < count; i++) {
                $scope.roomCounts[index].push(i);
                //console.log($scope.roomCounts[index])
                $scope.newfloor.roomNumber[index].room.push(i + 1);
                //console.log($scope.newfloor.roomNumber[index])
                // $scope.newfloor.roomNumber[index].room[i] = i+1;

            }
            console.log($scope.newfloor)
            $scope.newfloor.startingNumber[index] = 1;
            $scope.newfloor.numberDigit[index] = 1;
            $scope.roomNoDigit(index);
            // $scope.roomStartingNumber(index);
        }

        function pad(n, width, z) {
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        $scope.roomNoDigit = function (index) {
            // COMMENTED
            var digit = $scope.newfloor.roomNumber[index].room.length
            for (i = 0; i < digit && digit != 0; i++) {
                $scope.newfloor.roomNumber[index].room[i] = { "roomId": pad(parseInt($scope.newfloor.startingNumber[index]) + parseInt(i), parseInt($scope.newfloor.numberDigit[index]), 0) }
                //console.log($scope.newfloor.roomNumber[index])
            }
        }

        // $scope.roomStartingNumber = function (index) {
        //     //console.log($scope.newfloor.roomNumber[index])
        //     var number = $scope.newfloor.roomNumber[index].room.length;
        //     for (i = 0; i < number && number != 0; i++) {
        //         $scope.newfloor.roomNumber[index].room[i] = pad(parseInt($scope.newfloor.startingNumber[index]) + parseInt(i), parseInt($scope.newfloor.numberDigit[index]), 0)


        //     }
        // }


        //Add New Floor
        $scope.floors = [];
        $scope.addNewFloor = function () { //Add

            var itemIndex = 0;
            if ($scope.floors.length) {
                itemIndex = ($scope.floors[$scope.floors.length - 1].itemIndex) + 1;
            }
            $scope.floors.push({ itemIndex: itemIndex })
            console.log($scope.floors);
        }
        $scope.floorsandrooms = [];
        var details = $scope.newfloor;
        $scope.saveFloorsandRooms = function () {
            guestHouseMasterService.createFloorsandRooms(details, function (err, res) {
                if (!err) {

                    $scope.newfloor.floorsandrooms.push(details);

                }
            })
        }
    }

})();


