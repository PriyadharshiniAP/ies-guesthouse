(function () {
    'use strict';
    var App = angular.module('app', [
        'ui.router',
        'ngSanitize',
        'oc.lazyLoad',
        'angular-flatpickr',
        'ui.select',
        'ui.tinymce',
        'zingchart-angularjs',
        // 'thatisuday.dropzone',
        'app.auth'

    ]);
    App.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('stayView');
            $stateProvider
                .state('guestHouse/guestHouseMaster', {
                    url: '/guestHouse/guestHouseMaster',
                    templateUrl: 'app/modules/guestHouse/guestHouseMaster.html',
                    controller: 'guestHouseMasterCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/datatables.net-dt/css/jquery.dataTables.min.css',
                                    'bower_components/datatables.net/js/jquery.dataTables.min.js',
                                    'bower_components/datatables.net/js/jquery.dataTables.min.js',
                                    'bower_components/datatables.net-buttons/js/dataTables.buttons.min.js'
                                ]
                            });
                        }]
                    }


                })
                .state('masterData', {
                    url: '/masterData',
                    templateUrl: 'app/modules/guestHouse/masterData.html',
                    controller: 'masterDataCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/ng-tags-input/ng-tags-input.css',
                                    'bower_components/ng-tags-input/ng-tags-input.js',
                                ]
                            });
                        }]
                    }
                })
                .state('addGuesthouse', {
                    url: '/:detailsdataMode/addGuesthouse/:guestHouse',
                    templateUrl: 'app/modules/guestHouse/addGuesthouse.html',
                    controller: 'addGuesthouseCtrl',
                    params: {
                        detailsdataMode :"ADD",
                        guestHouse: null
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'assets/css/assets.css',
                                    'assets/fonts/flaticon/flaticon.css',
                                    'bower_components/dropzone/dist/dropzone.css',
                                    'bower_components/dropzone/dist/dropzone.js',
                                    'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                    'bower_components/tinymce/tinymce.js',
                                    'bower_components/angular-ui-tinymce/src/tinymce.js',
                                    'bower_components/angular-tree-control/css/tree-control.css',
                                    'bower_components/angular-tree-control/css/tree-control-attribute.css',
                                    'bower_components/angular-tree-control/angular-tree-control.js',
                                    'bower_components/flatpickr/dist/flatpickr.min.css',
                                    'assets/css/flatpickr-theme.css',
                                    'bower_components/flatpickr/dist/flatpickr.min.js',
                                    'bower_components/angular-flatpickr/dist/ng-flatpickr.js',
                                    'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
                                    'bower_components/angular-ui-select/dist/select.min.css',
                                    'bower_components/angular-ui-select/dist/select.min.js',
                                    'bower_components/datatables.net-dt/css/jquery.dataTables.min.css',
                                    'bower_components/datatables.net/js/jquery.dataTables.min.js',
                                    // 'bower_components/dropzone/dist/dropzone.css',
                                    // 'bower_components/dropzone/dist/dropzone.js',
                                    // 'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                    // 'bower_components/flatpickr/dist/flatpickr.min.css',
                                    // 'bower_components/flatpickr/dist/flatpickr.js',
                                    // 'bower_components/angular-flatpickr/dist/ng-flatpickr.min.js'

                                ]
                            });
                        }]
                    }

                })
                .state('stayView', {
                    url: '/stayView',
                    templateUrl: 'app/modules/guestHouse/stay_view.html',
                    controller: 'guestHouseStayCtrl',
                    resolve: { 
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files :[
                                   'bower_components/dropzone/dist/dropzone.css',
                                   'bower_components/dropzone/dist/dropzone.js',
                                   'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                   'bower_components/tinymce/tinymce.js',
                                   'bower_components/angular-ui-tinymce/src/tinymce.js',
                                   'bower_components/angular-tree-control/css/tree-control.css',
                                   'bower_components/angular-tree-control/css/tree-control-attribute.css',
                                   'bower_components/angular-tree-control/angular-tree-control.js',
                                   'bower_components/flatpickr/dist/flatpickr.min.css',
                                   'assets/css/flatpickr-theme.css',
                                   'bower_components/flatpickr/dist/flatpickr.min.js',
                                   'bower_components/angular-flatpickr/dist/ng-flatpickr.js',
                                   'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
                                   'bower_components/angular-ui-select/dist/select.min.css',
                                   'bower_components/angular-ui-select/dist/select.min.js',
                                ]
                            });
                        }]
                    }
                    
                })
                .state('roomView', {
                    url: '/roomView',
                    templateUrl: 'app/modules/guestHouse/room_view.html',
                    controller: 'guestHouseStayCtrl',
                    resolve: { 
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files :[
                                   'bower_components/dropzone/dist/dropzone.css',
                                   'bower_components/dropzone/dist/dropzone.js',
                                   'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                   'bower_components/tinymce/tinymce.js',
                                   'bower_components/angular-ui-tinymce/src/tinymce.js',
                                   'bower_components/angular-tree-control/css/tree-control.css',
                                   'bower_components/angular-tree-control/css/tree-control-attribute.css',
                                   'bower_components/angular-tree-control/angular-tree-control.js',
                                   'bower_components/flatpickr/dist/flatpickr.min.css',
                                   'assets/css/flatpickr-theme.css',
                                   'bower_components/flatpickr/dist/flatpickr.min.js',
                                   'bower_components/angular-flatpickr/dist/ng-flatpickr.js',
                                   'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
                                   'bower_components/angular-ui-select/dist/select.min.css',
                                   'bower_components/angular-ui-select/dist/select.min.js',
                                ]
                            });
                        }]
                    }
                    
                })
                .state('reservations', {
                    url: '/reservations',
                    templateUrl: 'app/modules/guestHouse/reservations.html',
                    controller: 'TablesCtrl',
                })
                .state('roomList', {
                    url: '/roomList',
                    templateUrl: 'app/modules/guestHouse/room_list.html',
                    controller: 'guestHouseroomListCtrl',
                    resolve: { 
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files :[
                                   'assets/fonts/flaticon/flaticon.css',
                                   'bower_components/dropzone/dist/dropzone.css',
                                   'bower_components/dropzone/dist/dropzone.js',
                                   'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                   'bower_components/tinymce/tinymce.js',
                                   'bower_components/angular-ui-tinymce/src/tinymce.js',
                                   'bower_components/angular-tree-control/css/tree-control.css',
                                   'bower_components/angular-tree-control/css/tree-control-attribute.css',
                                   'bower_components/angular-tree-control/angular-tree-control.js',
                                   'bower_components/flatpickr/dist/flatpickr.min.css',
                                   'assets/css/flatpickr-theme.css',
                                   'bower_components/flatpickr/dist/flatpickr.min.js',
                                   'bower_components/angular-flatpickr/dist/ng-flatpickr.js',
                                   'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
                                   'bower_components/angular-ui-select/dist/select.min.css',
                                   'bower_components/angular-ui-select/dist/select.min.js',
                                ]
                            });
                        }]
                    }
                    
                })
                
    
    
    
                /*.state('guestHouse/addGuesthouse', {
                    url: '/guestHouse/addGuesthouse',
                    templateUrl: 'app/modules/guestHouse/addGuesthouse.html',
                    controller: 'addGuesthouseCtrl',
                    resolve: { 
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files :[
                                   'assets/css/assets.css',
                                   'assets/fonts/flaticon/flaticon.css',
                                   'bower_components/dropzone/dist/dropzone.css',
                                   'bower_components/dropzone/dist/dropzone.js',
                                   'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                   'bower_components/tinymce/tinymce.js',
                                   'bower_components/angular-ui-tinymce/src/tinymce.js',
                                   'bower_components/angular-tree-control/css/tree-control.css',
                                   'bower_components/angular-tree-control/css/tree-control-attribute.css',
                                   'bower_components/angular-tree-control/angular-tree-control.js',
                                   'bower_components/flatpickr/dist/flatpickr.min.css',
                                   'assets/css/flatpickr-theme.css',
                                   'bower_components/flatpickr/dist/flatpickr.min.js',
                                   'bower_components/angular-flatpickr/dist/ng-flatpickr.js',
                                   'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
                                   'bower_components/angular-ui-select/dist/select.min.css',
                                   'bower_components/angular-ui-select/dist/select.min.js',
                                ]
                            });
                        }]
                    }
                })*/
                .state('addTariff', {
                    url: '/addTariff',
                    templateUrl: 'app/modules/guestHouse/addTariff.html',
                    controller: 'addTariffCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/ng-tags-input/ng-tags-input.css',
                                    'bower_components/ng-tags-input/ng-tags-input.js',
                                ]
                            });
                        }]
                    }
                })


        }
    ]);
    App.controller('AppCtrl', ['$scope', '$window', '$timeout',
        function ($scope, $window, $timeout) {


            //Standard Table Filter Collapse
            $scope.filterCollapse = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('.get-collapse').parent().removeClass('selected');
                angular.element(thisElement).parent().toggleClass('selected');
                angular.element('#getData').hide();
                angular.element('#filterResult').toggle();
            }

            //Data Collapse
            $scope.dataCollapse = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('.filter-collapse').parent().removeClass('selected');
                angular.element(thisElement).parent().toggleClass('selected');
                angular.element('#filterResult').hide();
                angular.element('#getData').toggle();
            }

            //Sidebar Collapse
            $scope.sidebarCollapseHide = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('#leftColumn').toggle("silde");
                $timeout(function () {
                    angular.element('#rightColumn').toggleClass('col-md-12');
                    angular.element('#siderbarCollapseShow').toggleClass('d-flex');
                }, 150);
            }
            $scope.sidebarCollapseShow = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('#siderbarCollapseShow').toggleClass('d-flex');
                angular.element('#rightColumn').toggleClass('col-md-12');
                angular.element('#leftColumn').toggle("silde");
            }

        }
    ]);
    App.controller('HeaderCtrl', ['$scope', '$window', '$rootScope', '$state',
        function ($scope, $window, $rootScope, $state) {
            //  $scope.changeState = function () {
            //      $state.go('addGuesthouse', { dataMode: "ADD", id: null })
            //  }
            $scope.logout = function () {
                $rootScope.Auth.logout();
            }
            /*console.log($rootScope.$state.current.name);
             $rootScope.toggleLeftSection = function ($event) {
                 angular.element($event.currentTarget).children('i').toggleClass('la-indent')
                 angular.element('#treeSection').toggleClass('d-none');
                 angular.element('#gridSection').toggleClass('col-md-12');
             }*/
        }
    ]);
})();
(
    function bootstrap() {
        //initialize and login to keycloak as well as attach event handlers
        angular.module('app').run(['$rootScope', '$location', 'Auth', 'rolesToEntitlements', 'roleToStates', '$http', runKeycloak]);
        function runKeycloak($rootScope, $location, Auth, rolesToEntitlements, roleToStates, $http) {
            $rootScope.Auth = Auth;

            //initial bootstrapping of angular
            injectUserTokenIntoHttpHeader(Auth);

            // register auth change function
            Auth.onauthChange = function () {
                // on token refresh
                injectUserTokenIntoHttpHeader(Auth);
            }

            function injectUserTokenIntoHttpHeader(Auth) {
                var token = "Bearer " + Auth.token;
                $http.defaults.headers.common['Authorization'] = 'annasarpprasanna';
            }

            //login to keycloak
            $rootScope.$on("event:auth-loginRequired", function () {
                console.log("Event auth-loginRequired acquired")
                var loginOptions = {
                    redirectUri: window.location,
                    prompt: "none",
                    maxAge: 3600,
                    loginHint: "",
                    action: "login",
                    locale: "en"
                };
                console.log(createLoginUrl(loginOptions));
                Auth.login(loginOptions);
            });
        }////end init
    }
)();

