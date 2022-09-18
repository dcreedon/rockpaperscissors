import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
//import LogoutView from '../views/LogoutView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', redirect: '/',    meta: {
    checkAuth: true
  } },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      checkAuth: true
    }
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/game',
    name: 'GameView',
    component: GameView,
    meta: {
      requiresAuth: true
    }
  },  {
    path: '/logout',
    name: 'LogoutView',
    component: () => import(/* webpackChunkName: "logout" */ '../views/LogoutView.vue')
    //component: LogoutView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// Meta Handling

router.beforeEach((to, from, next) => {

 if (to.matched.some(record => record.meta.requiresAuth)) {
    //alert("requires auth " + localStorage.getItem('loggedIn') );
    if ((localStorage.getItem('loggedIn') == null) || (JSON.parse(localStorage.getItem('loggedIn')) == false)) {
      //alert("not logged in" + localStorage.getItem('loggedIn') );
      next({
        //path: '/',
        //replace: true,
        name: 'HomeView'
      })
    } else{ next()}
  } else if (to.matched.some(record => record.meta.checkAuth)) {
    //alert("before check for loggedIn route checkAuth "+ localStorage.getItem('loggedIn'));
    if (JSON.parse(localStorage.getItem('loggedIn')) == true) {
      //alert("before each check route checkAuth " + localStorage.getItem('loggedIn'));
      next({
        path: 'game',
        //replace: true
        //name: 'GameView'
      })
    } else{ next()} 
  }else{
      next()
    }

  
}) 

export default router