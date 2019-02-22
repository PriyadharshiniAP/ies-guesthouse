(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('guestHouseroomListCtrl', guestHouseroomListCtrl);
    guestHouseroomListCtrl.$inject = ['$scope', '$rootScope', '$window', '$timeout', 'guestHouseMasterService'];
    function guestHouseroomListCtrl($scope, $rootScope, $window, $timeout, guestHouseMasterService) {
        $scope.classes = {
            "TV" : "icon icon-013",
            "Free Wifi"  : "icon icon-047",
            "GYM" : "icon icon-041",
            "VIP" : "icon icon-037",
            "AC" : "icon icon-227",
            "Parking Facility" : "icon icon-202",
            "Car Parking" : "icon icon-098",
            "Bike Parking" : "icon icon-097",
            "Food" : "icon icon-045",
            "Landline" : "icon icon-180",
            "Swimming Pool" : "icon icon-026",
            "Tea / Coffee" : "icon icon-005",
            "Games" : "icon icon-209",
            "Room Cleaning" : "icon icon-199",
            "CCTV Cameras" : "icon icon-153",
            "No smoking" : "icon icon-060",
            "Support" : "icon icon-249",
            "Card Payment" : "icon icon-111",
            "In-house Restauarant " : "icon icon-216",
            "Power backup" : "icon icon-028",
            "Conference Room" : "icon icon-206",
            "Banquet Hall" : "icon icon-147",
            "Dining Area" : "icon icon-191",
            "Elevator" : "icon icon-059",
            "Hot Water" : "icon icon-158",
            "Bar" : "icon icon-188",
            "Wheelchair Accessible" : "icon icon-178",
            "Room Heater" : "icon icon-141",
            "In Room Safe" : "icon icon-119",
            "Mini Fridge" : "icon icon-223",
            "Complimentary Breakfast" : "icon icon-173",
            "Hair Dryer" : "icon icon-205",
            "Laundry " : "icon icon-126",
            "Pet Friendly" : "icon icon-156",
            "HDTV" : "icon icon-013",
            "Spa" : "icon icon-083",
            "Wellness Center" : "icon icon-200",
            "Electricity" : "icon icon-231",
            "Bath Tub" : "icon icon-008",
            "Netflix" : "icon icon-079",
            "Kindle" : "icon icon-163",
            "Coffee Tea Maker" : "icon icon-090",
            "Sofa Set" : "icon icon-178",
            "Jacuzzi" : "icon icon-008",
            "Full Length Mirrror" : "icon icon-187",
            "Balcony" : "icon icon-233",
            "King Bed" : "icon icon-167",
            "Single Bed" : "icon icon-022",
            "Intercom" : "icon icon-076",
            "Sufficient Room Size" : "icon icon-030",
            "Sufficient Washroom" : "icon icon-014",
            "In-house Restaurant" : "icon icon-216"
        }
        $scope.getClasses = function (name) {
            return $scope.classes[name];
        }
        $scope.facility = ['AC', 'TV', 'Free Wifi', 'Kitchen', 'In-house Restaurant', 'Parking Facility', 'Card Payment', 'Power backup', 'Conference Room', 'Banquet Hall', 'CCTV Cameras', 'Dining Area', 'Elevator', 'Swimming Pool', 'Hot Water', 'Bar', 'Wheelchair Accessible', 'Room Heater', 'In Room Safe', 'Mini Fridge', 'Complimentary Breakfast', 'Gym', 'Hair Dryer', 'Laundry', 'Pet Friendly', 'HDTV', 'Spa', 'Wellness Center', 'Electricity', 'Bath Tub', 'Netflix', 'Kindle', 'Coffee Tea Maker', 'Sofa Set', 'Jacuzzi', 'Full Length Mirrror', 'Balcony', 'King Bed', 'Queen Bed', 'Single Bed', 'Intercom', 'Sufficient Room Size', 'Sufficient Washroom'];
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
        $scope.dateOpts1 = {
            dateFormat: 'd-m-Y',
        };
        $scope.roomrequest = {};
        $scope.roomrequests = [];
        $scope.roomType = [];
        $scope.availability ={};

        function loadInitialRoomType() {
            guestHouseMasterService.getAllRoomTypes(function (err, res) {
                if (!err) {
                    $scope.roomType = res;
                    // if($scope.availability.roomtype == $scope.roomType.roomname){
                    //     console.log("corrext");
                    // }
                }
            })
        }
        loadInitialRoomType();
        // function loadInitialAllGuestHouse() {
        //     guestHouseMasterService.getAllGuestHouse(function (err, res) {
        //         if (!err) {
        //             $scope.guestHouse = res;
        //         }
        //     })
        // }
        // loadInitialAllGuestHouse();

        $scope.saveRoomRequest = function () {
            guestHouseMasterService.addRoomRequest($scope.roomrequest, function (err, res) {
                if (!err) {
                    $scope.roomrequests.push($scope.roomrequest);

                    var checkin = moment($scope.roomrequest.checkin, "DD/MM/YYYY");
                    console.log(checkin);
                    var checkout = moment($scope.roomrequest.checkout, "DD/MM/YYYY");
                    var duration = checkin.diff(checkout, 'days');
                    var cost = Math.abs(duration);
                    var tot = cost*($scope.roomrequest.tariff)
                    console.log(tot);       
                    // console.log(checkin.diff(checkout,'days')); 
                }
            })
        }
        $scope.checkAvailability = function(){
           guestHouseMasterService.checkAvailabilityforRooms($scope.availability, $scope.roomType, function (){
               if(!err){
            console.log("i am inside");
                   if( $scope.availability.roomtype == $scope.roomType.roomname){
                       console.log(true);
                   }
                }

                
            })
            //checkAvailability();
        }
        //console.log("hello");
        // $scope.roomCategoryType = [];
        // $scope.roomFacilityType = [];
        // $scope.filterRoomName = [];
        // //$scope.room = [];
        // $scope.filterrooms = function (event) {
        //     var cnt = 0;
        //     $("input:checkbox[name='roomFilterCriteria']:checked").each(function () {
        //         cnt = 1 + cnt
        //     });
        //     if (cnt == 0) {
        //         initialSetup = true;
        //     }
        //     //console.log(event)
        //     if ($scope.roomCategoryType.length && event.roomname && $scope.roomCategoryType.includes(event.roomname)) {
        //         return true;
        //     }
        //     return false;

        //  }

       /* $scope.roomCategory = function (event) {
            if ($scope.roomCategoryType.length > 0) {
                if ($.inArray(event.roomname, $scope.roomCategoryType) < 0)
                    return;
            }
            return event;
        }
        $scope.roomTariffFilters = function (event) {
            if ($scope.filterRoomName.length > 0) {
                if ($.inArray(event.tariff, $scope.filterRoomName) < 0)
                    return;
            }
            return event;
        }
       
        $scope.roomFacilityFilters = function (event) {
                if ($scope.roomFacilityType.length > 0) {    
                    if ($.inArray(event.facilities, $scope.roomFacilityType) < 0)
                        return;
                }                     
                return event;
    
            }*/
            // $scope.roomFacilityFilters = function (event) {
            //     if ($scope.roomFacilityType.length <0) {
            //         console.log(event.facilities.includes("AC"))
            //         if (! event.facilities.includes("AC"))
            //             return false;
            //     }
            //     return true;
            // }

        // $scope.roomFacilityFilters = function (event) {

        //     if ($scope.roomFacilityType.length > 0) {

        //         if ($.inArray(event.facilities, $scope.roomFacilityType) < 0){
        //             for(var i=0;i< event.facilities.length;i++){

        //                 if ($.inArray(event.facilities[i]== $scope.roomFacilityType)){
        //                     return;
        //                 }
        //             }            
        //         }
        //     }
        //     return event;

        // }
        // $scope.facilityFilter = function (event) {
        //     var i = $.inArray(event, $scope.roomFacilityType);

        //     if (i > -1) {
        //         $scope.roomFacilityType.splice(i, 1);
        //     } else {
        //         $scope.roomFacilityType.push(event);
        //         //console.log($scope.roomFacilityType);
        //     }
        // }

        // $scope.roomnameFilter = function (event) {
        //     var i = $.inArray(event, $scope.roomCategoryType);

        //     if (i > -1) {
        //         $scope.roomCategoryType.splice(i, 1);
        //     } else {
        //         $scope.roomCategoryType.push(event);
        //     }
        // }
        // $scope.roomtariffFilter = function (event) {
        //     var i = $.inArray(event, $scope.filterRoomName);

        //     if (i > -1) {
        //         $scope.filterRoomName.splice(i, 1);
        //     } else {
        //         $scope.filterRoomName.push(event);
        //     }
        // }

        /*$scope.facilitFilter = function (event) {
            var i = $.inArray(event, $scope.roomFacilityType);
            if (i > -1) {
                $scope.roomFacilityType.splice(i, 1);
            } else {
                $scope.roomFacilityType.push(event);
            }
        }*/
        // $scope.roomNameSelector = function(str) {
        //     $scope.room =[];
        //     if(str !=""){
        //         for (var j=0; j<$scope.rooms.length; j++) {
        //             if ($scope.roomType[j].roomName.match(str)){
        //                 $scope.room.push($scope.roomType[j]);
        //             }
        //         }

        //     }else{
        //         $scope.room = $scope.roomType.slice();
        //     }
        // }

        // $scope.roomNameFilters = function (event) {
        //     if ($scope.filterRoomName.length > 0) {
        //         if ($.inArray(event.description, $scope.filterRoomName) < 0)
        //             return;
        //     }
        //     return event;
        // }


    }

})();     
