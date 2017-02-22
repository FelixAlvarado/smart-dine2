var smartdine;
(function (smartdine) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.assign = function (word) {
                this.type = word;
                console.log(this.type);
                return this.type;
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var ListController = (function () {
            function ListController($state, placeService) {
                this.$state = $state;
                this.placeService = placeService;
                this.place = placeService.list();
            }
            ListController.prototype.remove = function (id) {
                var _this = this;
                this.placeService.remove(id).then(function () {
                    _this.place = _this.placeService.list();
                    _this.$state.reload();
                    ;
                });
            };
            return ListController;
        }());
        Controllers.ListController = ListController;
        var EditController = (function () {
            function EditController(placeService, $state, $stateParams) {
                this.placeService = placeService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.placeId = $stateParams['id'];
            }
            EditController.prototype.save = function () {
                var _this = this;
                this.Place._id = this.placeId;
                this.placeService.save(this.Place).then(function () {
                    _this.$state.go('home');
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return EditController;
        }());
        Controllers.EditController = EditController;
        var AddController = (function () {
            function AddController($state, placeService) {
                this.$state = $state;
                this.placeService = placeService;
            }
            AddController.prototype.add = function () {
                var _this = this;
                this.placeService.save(this.Place).then(function () {
                    _this.Place = null;
                    _this.$state.go('home');
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return AddController;
        }());
        Controllers.AddController = AddController;
        var CategoryController = (function () {
            function CategoryController() {
            }
            CategoryController.prototype.assign = function (word) {
                this.type = word;
                console.log(this.type);
            };
            return CategoryController;
        }());
        Controllers.CategoryController = CategoryController;
        var LoginController = (function () {
            function LoginController($state, userService, $window) {
                this.$state = $state;
                this.userService = userService;
                this.$window = $window;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    alert('login successful');
                    _this.$state.go('home');
                }).catch(function (err) {
                    alert('Invalid Login');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController($state, userService) {
                this.$state = $state;
                this.userService = userService;
            }
            RegisterController.prototype.signup = function () {
                var _this = this;
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                    _this.$state.go('login');
                }).catch(function (err) {
                    alert('Registration Not Successfull');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = smartdine.Controllers || (smartdine.Controllers = {}));
})(smartdine || (smartdine = {}));
