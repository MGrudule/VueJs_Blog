<template>

  <div id="app" class="container">
    <div class="">
      <router-link class="button button-outlined "  tag="button" v-bind:to="'/'">Home</router-link>
      <router-link class="button button-outlined " v-if="isLoggedIn" tag="button" v-bind:to="'/admin'">Admin</router-link>
      <router-link v-else tag="button" v-bind:to="'/login'">Login</router-link>
    </div>


<router-view></router-view>
  </div>
</template>


<script>
import isLoggedMixin from './mixins/isLoggedMixin'
export default {
  name: 'app',
mixins:[isLoggedMixin],

data () {
  return {
    isLoggedIn: false,

    user_name: localStorage.getItem('user_name'),
  }
},
created(){
     this.checkIfLogged()
         .then(response => {
this.isLoggedIn = true;
                 this.user = response ? response : false;
             })
         .catch(error => console.log(error));

 },


}


</script>
<!-- styling for the component -->
<style lang="css">
@import "assets/sierra.css"
  /* Your css for this file... */
</style>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:white;

}
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

button, .router-link-active {
  display: inline-block;
  -ms-flex-item-align: center;
      align-self: center;
  background: white;
  padding: 0.2rem 0.2rem;
  margin: 0 0.2rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  color: #41403e;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  -webkit-box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
          box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

}
 button:hover, .router-link-active:hover {
  background: red;
  color: white;
  -webkit-box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
          box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
} */
</style>
