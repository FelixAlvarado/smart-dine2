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
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddController = (function () {
            function AddController($state, placeService) {
                this.$state = $state;
                this.placeService = placeService;
                this.Category = {};
            }
            AddController.prototype.add = function () {
                console.log(this.Category);
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
