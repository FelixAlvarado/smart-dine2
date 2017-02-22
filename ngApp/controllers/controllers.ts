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
      public remove(id) {
            this.placeService.remove(id).then(() => {
              this.place = this.placeService.list();
              this.$state.reload();
            });
          }

public get(type){
  this.placeService.filter(this.type)
  return type
}


    constructor( private $state,private $stateParams,
      private placeService) {
          this.type = $stateParams['value'];
      this.place = placeService.filter();
    }
}

export class EditController {
      public Place
public placeId
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
