var App = angular.module('app');
App.controller('TablesCtrl',TablesCtrl);
TablesCtrl.$inject = ['$scope', '$window', '$timeout','guestHouseMasterService']
    function TablesCtrl ($scope, $window, $timeout,guestHouseMasterService) {
        
           //SelectBox
        //    var vm = $scope;

        //    vm.itemArray = [
        //        { id: 1, name: 'HTML' },
        //        { id: 2, name: 'CSS' },
        //        { id: 3, name: 'JavaScript' },
        //        { id: 4, name: 'JQuery' },
        //        { id: 5, name: 'Angular JS' },
        //    ];
   
        // $('#example').DataTable();

        // $scope.tables = $('#exampleCheckbox').DataTable( {
        //     columnDefs: [ {
        //         orderable: false,
        //         className: 'select-checkbox',
        //         targets:   0
        //     } ],

        //     select: {
        //         //style:    'os',
        //         style: 'multi',
        //         selector: 'td:first-child'
        //     },
        //     order: [[ 1, 'asc' ]]
        // });


        // $(document).on("click", "th.select-checkbox", function () {
        //     if ($("th.select-checkbox").hasClass("selected")) {
        //         $scope.tables.rows().deselect();
        //         $("th.select-checkbox").removeClass("selected");
        //     } else {
        //         $scope.tables.rows().select();
        //         $("th.select-checkbox").addClass("selected");
        //     }
        // }).on("select deselect", function () {
        //     ("Some selection or deselection going on")
        //     if ($scope.tables.rows({
        //         selected: true
        //     }).count() !== $scope.tables.rows().count()) {
        //         $("th.select-checkbox").removeClass("selected");
        //     } else {
        //         $("th.select-checkbox").addClass("selected");
        //     }
        // });
        function loadInitialRoomRequest() {
            guestHouseMasterService.getAllRoomRequest(function (err, res) {
                if (!err) {
                    $scope.roomrequests = res;
                }
            })
        }
        loadInitialRoomRequest();
   
    }

