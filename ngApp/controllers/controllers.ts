namespace smartdine.Controllers {

    export class HomeController {
      public type
      public assign(word) {
        this.type = word;
         console.log(this.type);


      }
    }

export class AddController{


          public Category = {};

          public add() {
            // this.placeService.save(this.Category).then(()=> {
            // this.Category = {}; //clear form
            // this.$state.go('home');
            // }).catch((err) => {
            //   console.error(err);
            // })
            console.log(this.Category);
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
