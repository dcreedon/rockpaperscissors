# RockPaperScissors
Rock Paper Scissors Project 1

GIT Repo

https://github.com/dcreedon/rockpaperscissors.git

# Environment Setup

Linux - Debian

Check version of vue installed 

vue --version

vue install
npm install -g @vue/cli
npm i vue@2.6.12

- npm as default package manager Vue 2

vue create rockpaperscissors

After vue project creation

 $ cd rockpaperscissors
 $ npm run serve

http://localhost:8080/

Install bootstrap and bootstrap-vue

npm install bootstrap bootstrap-vue --save


change main.js to include this code:

```
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

```

vue add router


# Approach
 
 SPA (Single Page Application)

 Local storage for storing user registration, score and other details.
 Storage is persistent but local to client. It is not session storage.
 Once the user registers they are logged in.
 If they log out then the user will have to log in again.
 Only one user can be registered/login at a time per browser.

 If the user is not registered and tries to access the game <url>/game they will be redirected back to the login page.

 Once registered/signed in the user is presented with the RPS game.


# Resources

https://bootstrap-vue.org/

https://docs.github.com/en/authentication/connecting-to-github-with-ssh

https://linuxhint.com/install-use-bootstrap-with-vue-js/

https://medium.com/@renatello/things-i-put-in-gitignore-file-for-vue-js-projects-c53cecd8bd08

https://auth0.com/blog/beginner-vuejs-tutorial-with-user-login/

https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/

