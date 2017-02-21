namespace smartdine.Services {

export class UserService {
  public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    }

    public loginUser(userInfo) {
      return this.LoginResource.save(userInfo).$promise;
    }
    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    }
    }

    export class PlaceService {
     private PlaceResource;

     public get(id) {
       return this.PlaceResource.get({id:id});
     }

     public list() {
       return this.PlaceResource.query();
     }

     public save(Category) {
       return this.PlaceResource.save({id:Category._id}, Category).$promise;
     }

     public remove(animalId) {
       return this.PlaceResource.remove({id:animalId}).$promise;
     }

     constructor($resource:ng.resource.IResourceService) {
       this.PlaceResource = $resource('/api/category/:id');
     }
 }

 angular.module('smartdine').service('placeService', PlaceService);

     angular.module('smartdine').service('userService', UserService);
}
