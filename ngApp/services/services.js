var smartdine;
(function (smartdine) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
                this.SignUpResource = this.$resource('/userRoutes/api/Register');
            }
            UserService.prototype.registerUser = function (userObj) {
                return this.SignUpResource.save(userObj).$promise;
            };
            UserService.prototype.loginUser = function (userInfo) {
                return this.LoginResource.save(userInfo).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        var PlaceService = (function () {
            function PlaceService($resource) {
                this.PlaceResource = $resource('/api/category/:id');
            }
            PlaceService.prototype.get = function (id) {
                return this.PlaceResource.get({ id: id });
            };
            PlaceService.prototype.list = function () {
                return this.PlaceResource.query();
            };
            PlaceService.prototype.save = function (place) {
                return this.PlaceResource.save({ id: place._id }, place).$promise;
            };
            PlaceService.prototype.remove = function (placeId) {
                return this.PlaceResource.remove({ id: placeId }).$promise;
            };
            return PlaceService;
        }());
        Services.PlaceService = PlaceService;
        angular.module('smartdine').service('placeService', PlaceService);
        angular.module('smartdine').service('userService', UserService);
    })(Services = smartdine.Services || (smartdine.Services = {}));
})(smartdine || (smartdine = {}));
