import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Admin from './components/Admin'
//tell vue to use the router
Vue.use(VueRouter)
//define your routes


  //import the hello component

//define your routes
const routes = [
//define the root url of the application.
{ path: '/', component: Home , meta: { adminOnly: false } },
{ path: '/admin', component: Admin, meta: { adminOnly: true } },
{ path: '/login', component: Login, meta: { adminOnly: false } },
{ path: '/register', component: Register, meta: { adminOnly: false } }
]


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.adminOnly)) {
var token = localStorage.getItem('api_token');


    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
});


//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
