import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Admin from './components/Admin'
import Edit from './components/Edit'
import New from './components/New'
import Categories from './components/Categories'
import isLoggedMixin from './mixins/isLoggedMixin'
import Articles from './components/Articles'
import Article from './components/Article'
import HomeArticles from './components/HomeArticles'
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);
//tell vue to use the router
Vue.use(VueRouter)
//define your routes


  //import the hello component

//define your routes
const routes = [
//define the root url of the application.
{
  path: '/',
  component: Home ,
  meta: { adminOnly: false },
  children: [

        {
          path: 'articles/:id',
          name: 'Article',
          component: Article
        },
        {
          path: '',
          name: 'HomeArticles',
          component: HomeArticles
        }
      ]
},
{ path: '/admin',
  component: Admin,
  meta: { adminOnly: true },

  children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Articles',
          component: Articles
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
        ,
        {
          path: 'categories',
          name: 'Categories',
          component: Categories
        }
      ]

},
{
   path: '/login',
   component: Login,
   meta: { adminOnly: false }
 },

{ path: '/register',
  component: Register,
  meta: { adminOnly: false }
}
]


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})




router.beforeEach((to, from, next) => {
const token = localStorage.getItem('api_token');
const adminOnly = to.matched.some(record => record.meta.adminOnly);
if (adminOnly && !token) {
 next('/login');
} else if (adminOnly && token) {
 next();
} else {
 next();
}
});


//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  render: h => h(App),
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
