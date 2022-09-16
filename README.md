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

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


# Resources

https://bootstrap-vue.org/



https://linuxhint.com/install-use-bootstrap-with-vue-js/

https://medium.com/@renatello/things-i-put-in-gitignore-file-for-vue-js-projects-c53cecd8bd08

