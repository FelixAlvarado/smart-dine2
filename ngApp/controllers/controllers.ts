
namespace smartdine.Controllers {


    export class HomeController {
      public type
      public typeId
      public assign(word) {
      this.type = word
  }
  constructor (private $stateParams){
    this.typeId = $stateParams['type'];
  }
    }

    export class ListController{
      public place
      public type

      public admin(id){
        let token = window.localStorage['token'];
        let payload = JSON.parse(window.atob(token.split('.')[1]));
        if(payload.role === 'Admin') {
          this.$state.go('edit' , {id: id})
        }
        else {alert('Only Admins can edit restaurants.')}
      }
      public remove(id) {
        let token = window.localStorage['token'];
        let payload = JSON.parse(window.atob(token.split('.')[1]));
          if(payload.role === 'Admin') {
            this.placeService.remove(id).then(() => {
              this.place = this.placeService.filter();
              this.$state.reload();
            });}
            else {alert('Only Admins can delete restaurants.')}
          }

//       public get(type){
//           console.log(type);
//           this.placeService.filter(type);
//
// }


      constructor( private $state,private $stateParams,
        private placeService) {
          this.type = $stateParams['type'];
          this.place = placeService.filter(this.type);
          this.place.type = $stateParams['type'];

    }
}

export class EditController {
      public Place
public placeId

// public name
// public type

      public save() {

      this.Place._id = this.placeId;
        this.placeService.save(this.Place).then(()=> {
          this.$state.go('home'); // navigate back to home
        }).catch((err) => {
          console.error(err);
        })
      }

      constructor(
        private placeService,
        private $state,
        private $stateParams
      ) {
        this.placeId = $stateParams['id'];


// this.Place = $stateParams['id'];
//       this.Place = placeService.filter(this.type);
// this.Place.name = $stateParams['id'];
      }
  }

export class AddController{


          public Place

          public add() {
            this.placeService.save(this.Place).then(()=> {
            this.Place = null; //clear form
            this.$state.go('home');
            }).catch((err) => {
              console.error(err);
            })

          }
          public constructor(
            private $state,
            private placeService,

          ) {

          }
}
    export class CategoryController {
      public type
      public assign(word) {
         this.type = word;
         console.log(this.type);
      }
    }

    export class LoginController {
      public userInfo

      public login() {
        this.userInfo.role = 'Guest'
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          alert('login successful');
          this.$state.go('home');
        }).catch((err)=>{
          alert('Invalid Login');
        })
      }

      public constructor(
        private $state,
        private userService,
        public $window
      ) {

      }

    }

    export class AdminController {
      public userInfo

      public login() {
        this.userInfo.role = 'Admin'
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          alert('login successful');
          this.$state.go('home');
        }).catch((err)=>{
          alert('Invalid Login');
        })
      }

      public constructor(
        private $state,
        private userService,
        public $window
      ) {

      }

    }


    export class RegisterController {
        public user

        public signup() {
          this.userService.registerUser(this.user).then(() => {
            alert('signup successful, please login');
            this.$state.go('login');


          }).catch((err)=>{
            alert('Registration Not Successfull');
          })
        }

        public constructor(
          private $state,
          private userService
        ) {

        }
      }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
