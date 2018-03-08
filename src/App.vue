<template>

  <div id="app" >
    <div class="container">
  <router-link class="button button-outlined "  tag="button" v-bind:to="'/'">Home</router-link>
      <router-link class="button button-outlined "  tag="button" v-bind:to="'/login'">Login</router-link>
      <router-link class="button button-outlined " tag="button" v-bind:to="'/admin'"> Admin</router-link>


    </div>
<div class="container">
  <button v-on:click="fontSize++">
    Increase font size
  </button>
  <button v-on:click="fontSize--">
    Decrease font size
  </button>
   <router-view v-bind:style="{ fontSize: fontSize + 'px' }"></router-view>
 </div>
  </div>
</template>


<script>
import isLoggedMixin from './mixins/isLoggedMixin'
export default {
  name: 'app',
mixins:[isLoggedMixin],

data () {
  return {
    fontSize: 10,
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

.slide-fade-enter-active {
  transition: all .4s ease;
  transition-delay: .3s;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {


  opacity: 0;
}

</style>
