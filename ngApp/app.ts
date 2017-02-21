namespace smartdine {

    angular.module('smartdine', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: '/ngApp/views/login.html',
                controller: smartdine.Controllers.LoginController,
                controllerAs: 'vm'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: smartdine.Controllers.RegisterController,
                controllerAs: 'vm'
            })
            .state('home', {
                url: '/home',
                templateUrl: '/ngApp/views/home.html',
                controller: smartdine.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('american', {
                url: '/american',
                templateUrl: '/ngApp/views/american.html',
                controller: smartdine.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('add', {
                url: '/add',
                templateUrl: '/ngApp/views/add.html',
                controller: smartdine.Controllers.AddController,
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: smartdine.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
