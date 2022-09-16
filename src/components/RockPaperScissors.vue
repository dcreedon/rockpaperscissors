
<template>

    <div class="login-page">
          <transition name="fade">
             <div v-if="!registerActive" class="wallpaper-login"></div>
          </transition>
          <div class="wallpaper-register"></div>
    
        </div>
        
    </template>
    
    
    <script>
       
      export default {
        name: 'LoginUser',
        data() {
          return{
        name: '',
        password: '',
        loggedin: 0,
        registerActive: false,
        emailLogin: "",
        passwordLogin: "",
        emailReg: "",
        passwordReg: "",
        confirmReg: "",
        emptyFields: false}
      },
        
        methods: {
        doLogin() {
           if (this.emailLogin === "" || this.passwordLogin === "") {
              this.emptyFields = true;
           } else {
              alert("You are now logged in");
           }
        },
        
        doRegister() {
           if (this.nameReg === "" || this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
              this.emptyFields = true;
           } else {
             localStorage.name = this.nameReg;
             localStorage.email = this.emailReg;
             localStorage.password = this.passwordReg;
             alert("You are now registered");
             
           }
        }
     },
      };
      
    </script>
    
    
    
    <style scoped>
    
    
    </style>