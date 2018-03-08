<template>
  <div class="row ">



        <div class="col-md-offset-4 col-md-4">
            Sign in or <router-link to="/register" tag="button">Register</router-link>
          </div>

         <form class="login input-group col-md-offset-4 col-md-4" @submit.prevent="login">

           <div class="input input-with-icon full-width ">

           <input   class="input" required v-model="email" type="text" placeholder="email" />
          <i class="input-icon fa fa-user"></i> </div>

          <div class="input input-with-icon full-width ">
           <input class="input " required v-model="password" type="password" placeholder="Password"/>
           <i class="input-icon fa fa-key"></i>
         </div>
           <button type="submit">Login</button>
         </form>




  </div>
</template>

<script>


import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {

      loading: false,
      password: '',
      email: '',
      user_name: localStorage.getItem('user_name'),
    }
  },
  methods: {



login(){


      axios.post('https://peaceful-dusk-59248.herokuapp.com/api/login',
        {email: this.email,
         password: this.password})

      .then(response => {
console.log(response)
        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('user_name',response.data.data.name);
        localStorage.setItem('user_theme',response.data.data.theme);


        this.$router.push(this.$route.query.redirect || '/admin');

      })
      .catch(error => {



      });
    }

}
}
</script>

<style>

</style>
