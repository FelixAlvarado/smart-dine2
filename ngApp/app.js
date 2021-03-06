var smartdine;
(function (smartdine) {
    angular.module('smartdine', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
            url: '/',
            templateUrl: '/ngApp/views/login.html',
            controller: smartdine.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('admin', {
            url: '/admin',
            templateUrl: '/ngApp/views/admin.html',
            controller: smartdine.Controllers.AdminController,
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
            controller: smartdine.Controllers.ListController,
            controllerAs: 'vm'
        })
            .state('place', {
            url: '/place/:type',
            templateUrl: '/ngApp/views/place.html',
            controller: smartdine.Controllers.ListController,
            controllerAs: 'vm'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/edit.html',
            controller: smartdine.Controllers.EditController,
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
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(smartdine || (smartdine = {}));
